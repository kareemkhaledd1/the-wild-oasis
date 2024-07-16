import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qvnuxqcusferdbhokfbn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2bnV4cWN1c2ZlcmRiaG9rZmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwOTkyNTAsImV4cCI6MjAzNTY3NTI1MH0.1HW4uy_CRpwusI662X36JXMBoxp5WttuYKdPUQgYoxc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
