import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vfgzkmuonfkmzhhhtmjh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZ3prbXVvbmZrbXpoaGh0bWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNDg1NzQsImV4cCI6MjA2NTYyNDU3NH0.LaGDjZ_OREylrSBmhu8_BlM-jXxaVKeAgz0EinLWSuM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);