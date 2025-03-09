'use server'

import { createClient } from '../supabase/client'
import { cookies } from 'next/headers'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please provide a valid email address' }
  }

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])

    if (error) {
      if (error.code === '23505') { // Unique violation error code
        return { error: 'This email is already subscribed' }
      }
      return { error: 'Something went wrong. Please try again.' }
    }

    return { success: 'Thank you for subscribing!' }
  } catch (error) {
    return { error: 'Something went wrong. Please try again.' }
  }
}
