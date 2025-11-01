import { createClient } from '@supabase/supabase-js'

// Replace these with your actual project values
const supabaseUrl = 'https://dgkfbrxagpwmdjxtlbxd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRna2ZicnhhZ3B3bWRqeHRsYnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5ODY4NTksImV4cCI6MjA3NzU2Mjg1OX0.xKK45BG3I-9QRKH7N014pM6ijuD5pn5HAzfglc42hvU'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey)

// Get all appointments for a specific patient
export async function getAppointmentsByPatientId(patientId) {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('patient_id', patientId)

  if (error) {
    console.error('Error fetching appointments:', error)
    throw error
  }

  return data
}