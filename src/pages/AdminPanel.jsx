import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import PageLayout from '@/components/PageLayout';
import { Save, Edit3, Trash2, PlusCircle, Settings, Database, AlertTriangle, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const CONTENT_TABLE_NAME = 'website_content';

const AdminPanel = () => {
  const [content, setContent] = useState([]); 
  const [editingItem, setEditingItem] = useState(null); 
  const [currentValue, setCurrentValue] = useState('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRealtimeConnected, setIsRealtimeConnected] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from(CONTENT_TABLE_NAME)
        .select('*')
        .order('created_at', { ascending: true });

      if (fetchError) throw fetchError;
      setContent(data || []);
    } catch (err) {
      console.error("Error fetching content:", err);
      setError(`Failed to load content: ${err.message}. Ensure the table '${CONTENT_TABLE_NAME}' exists and replication is enabled.`);
      toast({ title: "Error loading content", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();

    const channel = supabase
      .channel(`realtime:${CONTENT_TABLE_NAME}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: CONTENT_TABLE_NAME },
        (payload) => {
          console.log('Realtime change received!', payload);
          
          const itemKey = payload.new?.content_key || payload.old?.content_key || (payload.old?.id ? `ID: ${payload.old.id.substring(0,8)}...` : 'Unknown item');
          toast({ 
            title: "Realtime Update ✨", 
            description: `Item '${itemKey}' ${payload.eventType.toLowerCase()}. List updated.`
          });

          setContent(currentContent => {
            let newContent = [...currentContent];
            if (payload.eventType === 'INSERT') {
              newContent.push(payload.new);
            } else if (payload.eventType === 'UPDATE') {
              newContent = newContent.map(item => 
                item.id === payload.new.id ? { ...item, ...payload.new } : item
              );
            } else if (payload.eventType === 'DELETE') {
              newContent = newContent.filter(item => item.id !== payload.old.id);
            }
            return newContent.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
          });
        }
      )
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log('Connected to Supabase Realtime!');
          setIsRealtimeConnected(true);
        }
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
          console.error('Supabase Realtime error:', err);
          setIsRealtimeConnected(false);
          setError(`Realtime connection issue: ${err?.message || 'Unknown error'}. Updates might not be live.`);
           toast({ title: "Realtime Connection Error", description: `Could not connect to realtime updates. ${err?.message || ''}`, variant: "destructive" });
        }
      });
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchContent]);

  const handleEdit = (item) => {
    setEditingItem(item);
    setCurrentValue(item.content_value);
  };

  const handleSave = async () => {
    if (!editingItem) return;
    setLoading(true);
    try {
      const { error: updateError } = await supabase
        .from(CONTENT_TABLE_NAME)
        .update({ content_value: currentValue, updated_at: new Date().toISOString() })
        .eq('id', editingItem.id);

      if (updateError) throw updateError;
      
      setEditingItem(null);
      toast({ title: "Content Saved!", description: `"${editingItem.content_key}" has been updated.` });
    } catch (err) {
      console.error("Error saving content:", err);
      toast({ title: "Error saving content", description: err.message, variant: "destructive" });
      setError(`Failed to save: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (itemId, itemKey) => {
    if (!window.confirm(`Are you sure you want to delete "${itemKey}"?`)) return;
    setLoading(true);
    try {
      const { error: deleteError } = await supabase
        .from(CONTENT_TABLE_NAME)
        .delete()
        .eq('id', itemId);

      if (deleteError) throw deleteError;
      toast({ title: "Content Deleted!", description: `"${itemKey}" has been removed.`, variant: "destructive" });
    } catch (err) {
      console.error("Error deleting content:", err);
      toast({ title: "Error deleting content", description: err.message, variant: "destructive" });
      setError(`Failed to delete: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = async () => {
    if (newKey && newValue) {
      const existingKey = content.find(item => item.content_key === newKey);
      if (existingKey) {
        toast({ title: "Error!", description: `Key "${newKey}" already exists. Choose a unique key.`, variant: "destructive" });
        return;
      }
      setLoading(true);
      try {
        const { error: insertError } = await supabase
          .from(CONTENT_TABLE_NAME)
          .insert([{ content_key: newKey, content_value: newValue }]);

        if (insertError) throw insertError;
        setNewKey('');
        setNewValue('');
        toast({ title: "Content Added!", description: `New item "${newKey}" has been added.` });
      } catch (err) {
        console.error("Error adding new content:", err);
        toast({ title: "Error adding content", description: err.message, variant: "destructive" });
        setError(`Failed to add new content: ${err.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      toast({ title: "Error!", description: "Both key and value are required to add new content.", variant: "destructive" });
    }
  };
  
  const isLongText = (text) => typeof text === 'string' && text.length > 100;

  return (
    <PageLayout title="Admin Panel" subtitle="Manage your website content with Supabase.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className={`flex items-center p-3 rounded-md text-sm ${isRealtimeConnected ? 'bg-green-900/50 text-green-300' : 'bg-yellow-900/50 text-yellow-300'}`}>
          <Zap className={`w-5 h-5 mr-2 ${isRealtimeConnected ? 'text-green-400 animate-pulse' : 'text-yellow-400'}`} />
          {isRealtimeConnected ? 'Realtime updates connected!' : 'Realtime updates connecting... (or check console/Supabase dashboard for errors)'}
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 flex items-start space-x-3"
          >
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Supabase Error:</p>
              <p className="text-sm">{error}</p>
              <p className="text-xs mt-2">Please ensure the table `website_content` exists in your Supabase project. Also, ensure RLS policies and table replication are correctly configured for realtime (Database &gt; Replication in Supabase dashboard).</p>
            </div>
          </motion.div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass neon-border-primary rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Database className="w-7 h-7 mr-3 text-primary" /> Manage Content
          </h2>
          {loading && content.length === 0 && <p className="text-muted-foreground">Loading content...</p>}
          {!loading && content.length === 0 && !error && (
            <p className="text-muted-foreground">No content found in Supabase. Add new content below.</p>
          )}
          <div className="space-y-6">
            {content.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="p-4 bg-card/80 rounded-lg border border-border"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-primary break-all">{item.content_key}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(item)} className="text-blue-400 hover:text-blue-300" disabled={loading}>
                      <Edit3 className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id, item.content_key)} className="text-red-400 hover:text-red-300" disabled={loading}>
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                {editingItem?.id === item.id ? (
                  <div className="space-y-3">
                    {isLongText(item.content_value) ? (
                       <Textarea
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        className="w-full bg-input text-foreground border-border focus:ring-primary min-h-[120px]"
                        rows={5}
                        disabled={loading}
                      />
                    ) : (
                      <Input
                        type="text"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        className="w-full bg-input text-foreground border-border focus:ring-primary"
                        disabled={loading}
                      />
                    )}
                    <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-primary-foreground" disabled={loading}>
                      <Save className="w-4 h-4 mr-2" /> {loading && editingItem?.id === item.id ? 'Saving...' : 'Save'}
                    </Button>
                  </div>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-wrap break-words">
                    {String(item.content_value)}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass neon-border-primary rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <PlusCircle className="w-7 h-7 mr-3 text-primary" /> Add New Content
          </h2>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter content key (e.g., contactEmail)"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              className="bg-input text-foreground border-border focus:ring-primary"
              disabled={loading}
            />
            <Textarea
              placeholder="Enter content value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="bg-input text-foreground border-border focus:ring-primary min-h-[100px]"
              rows={4}
              disabled={loading}
            />
            <Button onClick={handleAddNew} className="bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
              <PlusCircle className="w-4 h-4 mr-2" /> {loading && !editingItem ? 'Adding...' : 'Add Content'}
            </Button>
          </div>
        </motion.section>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-4 bg-sky-900/30 border border-sky-700 rounded-lg text-sky-300 text-sm"
        >
          <p className="font-semibold">Supabase Integration & Realtime:</p>
          <p>This admin panel uses Supabase for persistent content storage and real-time updates. Content is stored in the `{CONTENT_TABLE_NAME}` table.</p>
          <p className="mt-1 text-xs">For real-time updates to work, ensure you have enabled replication for the `{CONTENT_TABLE_NAME}` table in your Supabase project settings (Database &gt; Replication). If you see connection errors, also check your RLS policies.</p>
        </motion.div>

      </div>
    </PageLayout>
  );
};

export default AdminPanel;