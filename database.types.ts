export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      admin_actions: {
        Row: {
          action_type: string
          admin_id: string
          created_at: string | null
          description: string
          id: string
          ip_address: string | null
          metadata: Json | null
          target_appointment_id: string | null
          target_user_id: string | null
          user_agent: string | null
        }
        Insert: {
          action_type: string
          admin_id: string
          created_at?: string | null
          description: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          target_appointment_id?: string | null
          target_user_id?: string | null
          user_agent?: string | null
        }
        Update: {
          action_type?: string
          admin_id?: string
          created_at?: string | null
          description?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          target_appointment_id?: string | null
          target_user_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_actions_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_actions_target_appointment_id_fkey"
            columns: ["target_appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_actions_target_user_id_fkey"
            columns: ["target_user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_triage_sessions: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: string
          patient_id: string | null
          recommendations: Json | null
          session_token: string
          suggested_specialty: string | null
          symptoms: Json
          updated_at: string | null
          urgency_level: string | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          patient_id?: string | null
          recommendations?: Json | null
          session_token: string
          suggested_specialty?: string | null
          symptoms: Json
          updated_at?: string | null
          urgency_level?: string | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          patient_id?: string | null
          recommendations?: Json | null
          session_token?: string
          suggested_specialty?: string | null
          symptoms?: Json
          updated_at?: string | null
          urgency_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_triage_sessions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_events: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_reschedules: {
        Row: {
          appointment_id: string
          created_at: string | null
          id: string
          new_slot_end: string
          new_slot_start: string
          old_slot_end: string
          old_slot_start: string
          reason: string | null
          rescheduled_by: string
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          id?: string
          new_slot_end: string
          new_slot_start: string
          old_slot_end: string
          old_slot_start: string
          reason?: string | null
          rescheduled_by: string
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          id?: string
          new_slot_end?: string
          new_slot_start?: string
          old_slot_end?: string
          old_slot_start?: string
          reason?: string | null
          rescheduled_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointment_reschedules_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_reschedules_rescheduled_by_fkey"
            columns: ["rescheduled_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          ai_triage_result: Json | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          consultation_type: string | null
          created_at: string | null
          doctor_id: string
          id: string
          patient_id: string
          payment_id: string | null
          slot_end: string
          slot_start: string
          specialty: string | null
          status: string | null
          symptoms: string | null
          updated_at: string | null
          urgency_level: string | null
        }
        Insert: {
          ai_triage_result?: Json | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          consultation_type?: string | null
          created_at?: string | null
          doctor_id: string
          id?: string
          patient_id: string
          payment_id?: string | null
          slot_end: string
          slot_start: string
          specialty?: string | null
          status?: string | null
          symptoms?: string | null
          updated_at?: string | null
          urgency_level?: string | null
        }
        Update: {
          ai_triage_result?: Json | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          consultation_type?: string | null
          created_at?: string | null
          doctor_id?: string
          id?: string
          patient_id?: string
          payment_id?: string | null
          slot_end?: string
          slot_start?: string
          specialty?: string | null
          status?: string | null
          symptoms?: string | null
          updated_at?: string | null
          urgency_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_cancelled_by_fkey"
            columns: ["cancelled_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      doctor_availability: {
        Row: {
          created_at: string | null
          day_of_week: number
          doctor_id: string
          end_time: string
          id: string
          is_active: boolean | null
          slot_duration_minutes: number | null
          start_time: string
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          day_of_week: number
          doctor_id: string
          end_time: string
          id?: string
          is_active?: boolean | null
          slot_duration_minutes?: number | null
          start_time: string
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          day_of_week?: number
          doctor_id?: string
          end_time?: string
          id?: string
          is_active?: boolean | null
          slot_duration_minutes?: number | null
          start_time?: string
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctor_availability_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctor_blocks: {
        Row: {
          block_end: string
          block_start: string
          created_at: string | null
          doctor_id: string
          id: string
          reason: string | null
        }
        Insert: {
          block_end: string
          block_start: string
          created_at?: string | null
          doctor_id: string
          id?: string
          reason?: string | null
        }
        Update: {
          block_end?: string
          block_start?: string
          created_at?: string | null
          doctor_id?: string
          id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctor_blocks_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctor_specialties: {
        Row: {
          consultation_fee: number | null
          created_at: string | null
          doctor_id: string
          id: string
          specialty: string
        }
        Insert: {
          consultation_fee?: number | null
          created_at?: string | null
          doctor_id: string
          id?: string
          specialty: string
        }
        Update: {
          consultation_fee?: number | null
          created_at?: string | null
          doctor_id?: string
          id?: string
          specialty?: string
        }
        Relationships: [
          {
            foreignKeyName: "doctor_specialties_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          bio: string | null
          consultation_fee_base: number | null
          created_at: string | null
          experience_years: number | null
          id: string
          is_available: boolean | null
          license_document_url: string | null
          license_number: string
          license_verification_date: string | null
          license_verification_status: string | null
          rating_avg: number | null
          rating_count: number | null
          total_consultations: number | null
          updated_at: string | null
          verification_notes: string | null
        }
        Insert: {
          bio?: string | null
          consultation_fee_base?: number | null
          created_at?: string | null
          experience_years?: number | null
          id: string
          is_available?: boolean | null
          license_document_url?: string | null
          license_number: string
          license_verification_date?: string | null
          license_verification_status?: string | null
          rating_avg?: number | null
          rating_count?: number | null
          total_consultations?: number | null
          updated_at?: string | null
          verification_notes?: string | null
        }
        Update: {
          bio?: string | null
          consultation_fee_base?: number | null
          created_at?: string | null
          experience_years?: number | null
          id?: string
          is_available?: boolean | null
          license_document_url?: string | null
          license_number?: string
          license_verification_date?: string | null
          license_verification_status?: string | null
          rating_avg?: number | null
          rating_count?: number | null
          total_consultations?: number | null
          updated_at?: string | null
          verification_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctors_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      doorstep_checkups: {
        Row: {
          checkup_type: string[]
          created_at: string | null
          doorstep_request_id: string
          id: string
          kit_provided: boolean | null
          patient_notes: string | null
          provider_notes: string | null
          vitals_id: string | null
        }
        Insert: {
          checkup_type: string[]
          created_at?: string | null
          doorstep_request_id: string
          id?: string
          kit_provided?: boolean | null
          patient_notes?: string | null
          provider_notes?: string | null
          vitals_id?: string | null
        }
        Update: {
          checkup_type?: string[]
          created_at?: string | null
          doorstep_request_id?: string
          id?: string
          kit_provided?: boolean | null
          patient_notes?: string | null
          provider_notes?: string | null
          vitals_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doorstep_checkups_doorstep_request_id_fkey"
            columns: ["doorstep_request_id"]
            isOneToOne: false
            referencedRelation: "doorstep_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doorstep_checkups_vitals_id_fkey"
            columns: ["vitals_id"]
            isOneToOne: false
            referencedRelation: "vitals"
            referencedColumns: ["id"]
          },
        ]
      }
      doorstep_requests: {
        Row: {
          actual_arrival: string | null
          address: Json
          appointment_id: string | null
          cancellation_reason: string | null
          completed_at: string | null
          contact_phone: string
          created_at: string | null
          estimated_arrival: string | null
          id: string
          instructions: string | null
          patient_id: string
          provider_id: string | null
          provider_name: string | null
          provider_phone: string | null
          request_type: string
          scheduled_time: string | null
          service_type: string
          status: string | null
          tracker_url: string | null
          tracking_id: string | null
          updated_at: string | null
        }
        Insert: {
          actual_arrival?: string | null
          address: Json
          appointment_id?: string | null
          cancellation_reason?: string | null
          completed_at?: string | null
          contact_phone: string
          created_at?: string | null
          estimated_arrival?: string | null
          id?: string
          instructions?: string | null
          patient_id: string
          provider_id?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          request_type: string
          scheduled_time?: string | null
          service_type: string
          status?: string | null
          tracker_url?: string | null
          tracking_id?: string | null
          updated_at?: string | null
        }
        Update: {
          actual_arrival?: string | null
          address?: Json
          appointment_id?: string | null
          cancellation_reason?: string | null
          completed_at?: string | null
          contact_phone?: string
          created_at?: string | null
          estimated_arrival?: string | null
          id?: string
          instructions?: string | null
          patient_id?: string
          provider_id?: string | null
          provider_name?: string | null
          provider_phone?: string | null
          request_type?: string
          scheduled_time?: string | null
          service_type?: string
          status?: string | null
          tracker_url?: string | null
          tracking_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doorstep_requests_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doorstep_requests_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doorstep_requests_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_records: {
        Row: {
          appointment_id: string | null
          created_at: string | null
          description: string | null
          doctor_id: string | null
          file_urls: string[] | null
          id: string
          lab_results: Json | null
          patient_id: string
          record_type: string
          recorded_date: string
          title: string
          updated_at: string | null
          vital_signs: Json | null
        }
        Insert: {
          appointment_id?: string | null
          created_at?: string | null
          description?: string | null
          doctor_id?: string | null
          file_urls?: string[] | null
          id?: string
          lab_results?: Json | null
          patient_id: string
          record_type: string
          recorded_date?: string
          title: string
          updated_at?: string | null
          vital_signs?: Json | null
        }
        Update: {
          appointment_id?: string | null
          created_at?: string | null
          description?: string | null
          doctor_id?: string | null
          file_urls?: string[] | null
          id?: string
          lab_results?: Json | null
          patient_id?: string
          record_type?: string
          recorded_date?: string
          title?: string
          updated_at?: string | null
          vital_signs?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      medicine_deliveries: {
        Row: {
          created_at: string | null
          delivery_fee: number | null
          doorstep_request_id: string
          id: string
          medications: Json
          payment_status: string | null
          pharmacy_address: string | null
          pharmacy_name: string | null
          prescription_id: string | null
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          delivery_fee?: number | null
          doorstep_request_id: string
          id?: string
          medications: Json
          payment_status?: string | null
          pharmacy_address?: string | null
          pharmacy_name?: string | null
          prescription_id?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          delivery_fee?: number | null
          doorstep_request_id?: string
          id?: string
          medications?: Json
          payment_status?: string | null
          pharmacy_address?: string | null
          pharmacy_name?: string | null
          prescription_id?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medicine_deliveries_doorstep_request_id_fkey"
            columns: ["doorstep_request_id"]
            isOneToOne: false
            referencedRelation: "doorstep_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_deliveries_prescription_id_fkey"
            columns: ["prescription_id"]
            isOneToOne: false
            referencedRelation: "prescriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          appointment_id: string | null
          channel: string
          created_at: string | null
          delivered_at: string | null
          delivery_status: string | null
          doorstep_request_id: string | null
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          read_at: string | null
          sent_at: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          appointment_id?: string | null
          channel: string
          created_at?: string | null
          delivered_at?: string | null
          delivery_status?: string | null
          doorstep_request_id?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          read_at?: string | null
          sent_at?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          appointment_id?: string | null
          channel?: string
          created_at?: string | null
          delivered_at?: string | null
          delivery_status?: string | null
          doorstep_request_id?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          read_at?: string | null
          sent_at?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_doorstep_request_id_fkey"
            columns: ["doorstep_request_id"]
            isOneToOne: false
            referencedRelation: "doorstep_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          allergies: Json | null
          created_at: string | null
          emergency_contact: Json | null
          id: string
          insurance_details: Json | null
          medical_history: Json | null
          preferred_languages: string[] | null
          updated_at: string | null
        }
        Insert: {
          allergies?: Json | null
          created_at?: string | null
          emergency_contact?: Json | null
          id: string
          insurance_details?: Json | null
          medical_history?: Json | null
          preferred_languages?: string[] | null
          updated_at?: string | null
        }
        Update: {
          allergies?: Json | null
          created_at?: string | null
          emergency_contact?: Json | null
          id?: string
          insurance_details?: Json | null
          medical_history?: Json | null
          preferred_languages?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "patients_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          appointment_id: string | null
          created_at: string | null
          currency: string | null
          doorstep_request_id: string | null
          failure_reason: string | null
          gateway_order_id: string | null
          gateway_transaction_id: string | null
          id: string
          metadata: Json | null
          patient_id: string
          payment_gateway: string | null
          payment_method: string | null
          refund_amount: number | null
          refund_reason: string | null
          refunded_at: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          appointment_id?: string | null
          created_at?: string | null
          currency?: string | null
          doorstep_request_id?: string | null
          failure_reason?: string | null
          gateway_order_id?: string | null
          gateway_transaction_id?: string | null
          id?: string
          metadata?: Json | null
          patient_id: string
          payment_gateway?: string | null
          payment_method?: string | null
          refund_amount?: number | null
          refund_reason?: string | null
          refunded_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          appointment_id?: string | null
          created_at?: string | null
          currency?: string | null
          doorstep_request_id?: string | null
          failure_reason?: string | null
          gateway_order_id?: string | null
          gateway_transaction_id?: string | null
          id?: string
          metadata?: Json | null
          patient_id?: string
          payment_gateway?: string | null
          payment_method?: string | null
          refund_amount?: number | null
          refund_reason?: string | null
          refunded_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_doorstep_request_id_fkey"
            columns: ["doorstep_request_id"]
            isOneToOne: false
            referencedRelation: "doorstep_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          appointment_id: string
          created_at: string | null
          diagnosis: string | null
          doctor_id: string
          doctor_signature: string | null
          follow_up_date: string | null
          id: string
          is_active: boolean | null
          lab_tests: Json | null
          medications: Json
          notes: string | null
          patient_id: string
          pdf_url: string | null
          qr_code: string | null
          signature_timestamp: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          diagnosis?: string | null
          doctor_id: string
          doctor_signature?: string | null
          follow_up_date?: string | null
          id?: string
          is_active?: boolean | null
          lab_tests?: Json | null
          medications: Json
          notes?: string | null
          patient_id: string
          pdf_url?: string | null
          qr_code?: string | null
          signature_timestamp?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          diagnosis?: string | null
          doctor_id?: string
          doctor_signature?: string | null
          follow_up_date?: string | null
          id?: string
          is_active?: boolean | null
          lab_tests?: Json | null
          medications?: Json
          notes?: string | null
          patient_id?: string
          pdf_url?: string | null
          qr_code?: string | null
          signature_timestamp?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          appointment_id: string
          comment: string | null
          created_at: string | null
          doctor_id: string
          id: string
          is_anonymous: boolean | null
          patient_id: string
          rating: number
          updated_at: string | null
        }
        Insert: {
          appointment_id: string
          comment?: string | null
          created_at?: string | null
          doctor_id: string
          id?: string
          is_anonymous?: boolean | null
          patient_id: string
          rating: number
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string
          comment?: string | null
          created_at?: string | null
          doctor_id?: string
          id?: string
          is_anonymous?: boolean | null
          patient_id?: string
          rating?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      system_config: {
        Row: {
          config_key: string
          config_value: Json
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "system_config_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string
          full_name: string | null
          gender: string | null
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          language_preference: string | null
          phone: string | null
          postal_code: string | null
          role: string
          state: string | null
          theme_preference: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          full_name?: string | null
          gender?: string | null
          id: string
          is_active?: boolean | null
          is_verified?: boolean | null
          language_preference?: string | null
          phone?: string | null
          postal_code?: string | null
          role: string
          state?: string | null
          theme_preference?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          full_name?: string | null
          gender?: string | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          language_preference?: string | null
          phone?: string | null
          postal_code?: string | null
          role?: string
          state?: string | null
          theme_preference?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      video_sessions: {
        Row: {
          appointment_id: string
          chat_history: Json | null
          created_at: string | null
          duration_seconds: number | null
          ended_at: string | null
          files_shared: Json | null
          id: string
          provider: string | null
          recording_consent: boolean | null
          recording_enabled: boolean | null
          recording_sid: string | null
          recording_url: string | null
          room_name: string | null
          room_sid: string | null
          session_id: string | null
          started_at: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_id: string
          chat_history?: Json | null
          created_at?: string | null
          duration_seconds?: number | null
          ended_at?: string | null
          files_shared?: Json | null
          id?: string
          provider?: string | null
          recording_consent?: boolean | null
          recording_enabled?: boolean | null
          recording_sid?: string | null
          recording_url?: string | null
          room_name?: string | null
          room_sid?: string | null
          session_id?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string
          chat_history?: Json | null
          created_at?: string | null
          duration_seconds?: number | null
          ended_at?: string | null
          files_shared?: Json | null
          id?: string
          provider?: string | null
          recording_consent?: boolean | null
          recording_enabled?: boolean | null
          recording_sid?: string | null
          recording_url?: string | null
          room_name?: string | null
          room_sid?: string | null
          session_id?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "video_sessions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      vitals: {
        Row: {
          blood_pressure_diastolic: number | null
          blood_pressure_systolic: number | null
          bmi: number | null
          created_at: string | null
          doorstep_request_id: string | null
          glucose_mgdl: number | null
          heart_rate_bpm: number | null
          height_cm: number | null
          id: string
          notes: string | null
          patient_id: string
          recorded_at: string | null
          recorded_by: string | null
          spo2_percentage: number | null
          temperature_celsius: number | null
          weight_kg: number | null
        }
        Insert: {
          blood_pressure_diastolic?: number | null
          blood_pressure_systolic?: number | null
          bmi?: number | null
          created_at?: string | null
          doorstep_request_id?: string | null
          glucose_mgdl?: number | null
          heart_rate_bpm?: number | null
          height_cm?: number | null
          id?: string
          notes?: string | null
          patient_id: string
          recorded_at?: string | null
          recorded_by?: string | null
          spo2_percentage?: number | null
          temperature_celsius?: number | null
          weight_kg?: number | null
        }
        Update: {
          blood_pressure_diastolic?: number | null
          blood_pressure_systolic?: number | null
          bmi?: number | null
          created_at?: string | null
          doorstep_request_id?: string | null
          glucose_mgdl?: number | null
          heart_rate_bpm?: number | null
          height_cm?: number | null
          id?: string
          notes?: string | null
          patient_id?: string
          recorded_at?: string | null
          recorded_by?: string | null
          spo2_percentage?: number | null
          temperature_celsius?: number | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vitals_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vitals_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_available_slots: {
        Args: {
          p_date: string
          p_doctor_id: string
          p_duration_minutes?: number
        }
        Returns: {
          slot_end: string
          slot_start: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

