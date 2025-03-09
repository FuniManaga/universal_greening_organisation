import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@clerk/nextjs';

export type MembershipApplication = {
  id: string
  created_at: string
  name: string
  surname: string
  email: string
  phone: string
  institution: string
  qualifications: string
  level: 'undergraduate' | 'honors' | 'masters' | 'phd'
  motivation_letter: string
  membership_type: 'student'
  status?: string
}

export type Tree = {
  id: string
  created_at: string
  user_id: string
  species: string
  location_name: string
  latitude?: number
  longitude?: number
  planted_date: string
  notes?: string
  image_url?: string
  status: 'active' | 'removed'
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitMembershipApplication(application: Omit<MembershipApplication, 'id' | 'created_at' | 'status'>) {
  return await supabase
    .from('membership_applications')
    .insert([application])
    .select()
}

export async function getUserTrees(userId: string) {
  return await supabase
    .from('trees')
    .select('*')
    .eq('user_id', userId)
    .order('planted_date', { ascending: false })
}

export function useSupabaseClient() {
  const { getToken } = useAuth();

  const supabaseClientWithAuth = async () => {
    const token = await getToken({ template: 'supabase' });
    
    return supabase.auth.setSession({
      access_token: token!,
      refresh_token: '',
    });
  };

  return { supabaseClientWithAuth };
}

export { supabase };