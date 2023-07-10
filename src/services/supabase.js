import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zbakhzacvistvgqnavzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYWtoemFjdmlzdHZncW5hdnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjQ2NzgsImV4cCI6MjAwNDU0MDY3OH0.QA_Ty5EcuK8z_xYe-3s4073-G28iQnTXDduROWPvETQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
