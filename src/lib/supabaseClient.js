import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnrgpvboclswcquzomqh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxucmdwdmJvY2xzd2NxdXpvbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMTg3NzYsImV4cCI6MjA1OTU5NDc3Nn0.0Beb7HwIAWsbZicMlTZ67o3NGnuu-E62sHwE-rJmy_M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
