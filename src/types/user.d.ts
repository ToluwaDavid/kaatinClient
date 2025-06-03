export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  company: string;
  address: string;
  phone?: string;
  website?: string;
  slug: string; // 👈 ADD THIS
  // Optional: add socialLinks if you enable it later
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface AuthResponse {
  token: string;
  user: User;
}
