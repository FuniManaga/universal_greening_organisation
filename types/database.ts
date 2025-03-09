export interface User {
  id: string;
  clerk_id: string;
  created_at: string;
  updated_at: string;
  email: string;
  name?: string;
  surname?: string;
  phone?: string;
  institution?: string;
  academic_level?: string;
  notification_preferences: {
    email: boolean;
    push: boolean;
    newsletter: boolean;
  };
  privacy_settings: {
    profile_visible: boolean;
    show_email: boolean;
    show_phone: boolean;
  };
  avatar_url?: string;
  deleted_at?: string;
}