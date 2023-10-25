import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

export const supabase = () => {
  config()
  createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)
}
