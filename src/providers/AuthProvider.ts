import React, { useEffect } from 'react';
import { useAuthstore } from '../stores/useAuthStore';
import supabase from '../utils/supabase';

const AuthListener = () => {
  const { setUser, clearUser,  } = useAuthstore(); 

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('SIGNED_IN', session); 
        if (session?.user) {
          setUser(session.user); 
        }
      } else if (event === "SIGNED_OUT") {
        console.log('SIGNED_out', session); 
        clearUser()
      }
  
    });

    
    return () => {
      data.subscription.unsubscribe();
    };
  }, [setUser, clearUser, ]); 

  return null; 
};

export default AuthListener;
