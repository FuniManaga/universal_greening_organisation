"use server"

import { createClient } from '@supabase/supabase-js'
import { auth } from '@clerk/nextjs/server'
import { User } from '@/types/database'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function updateUserProfile(
  clerkId: string, 
  updates: Partial<Omit<User, 'id' | 'clerk_id' | 'created_at' | 'updated_at'>>
) {
  try {
    const { error } = await supabase
      .from('users')
      .update(updates)
      .eq('clerk_id', clerkId)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error updating user:', error)
    return { error: 'Failed to update profile' }
  }
}

export async function getUserProfile(clerkId: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('clerk_id', clerkId)
      .single()

    if (error) throw error
    return { data }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { error: 'Failed to fetch profile' }
  }
}

export async function createUserProfile(clerkUser: any) {
  try {
    const { error } = await supabase
      .from('users')
      .insert({
        clerk_id: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: clerkUser.firstName || '',
        surname: clerkUser.lastName || '',
      })

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error creating user:', error)
    return { error: 'Failed to create profile' }
  }
}