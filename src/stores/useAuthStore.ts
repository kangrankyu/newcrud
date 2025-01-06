import { create } from 'zustand'
import supabase from '../utils/supabase';
import { User } from '@supabase/supabase-js';


interface AuthState {
  user: User | null
    setUser: (user: User) => void;
    clearUser: () => void;
  }
  

export const  useAuthstore =create <AuthState>((set)=> ({
 user :null , 
 setUser: ( (user) => set( {user})),
 clearUser: () => set({ user: null }), 
 }));