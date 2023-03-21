import type {
   AuthError,
   AuthResponse,
   OAuthResponse,
   SignInWithOAuthCredentials,
   SignInWithPasswordCredentials,
   SignUpWithPasswordCredentials,
   User,
} from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { supabase } from '../supabase/supabase'

type CurrentUser = User | Record<string, never> | null

enum availableProviders {
   GOOGLE = 'google',
   FACEBOOK = 'facebook',
   APPLE = 'apple',
}

export const useProvideAuth = () => {
   const [user, setUser] = useState<CurrentUser>({})

   const singUp = async (credentials: SignUpWithPasswordCredentials): Promise<AuthResponse> => {
      return await supabase.auth.signUp(credentials)
   }

   const singIn = async (credentials: SignInWithPasswordCredentials): Promise<AuthResponse> => {
      return await supabase.auth.signInWithPassword(credentials)
   }

   const singInWithGoogle = async (
      credentials?: Omit<SignInWithOAuthCredentials, 'provider'>,
   ): Promise<OAuthResponse> => {
      return await supabase.auth.signInWithOAuth({
         provider: availableProviders.GOOGLE,
         ...credentials,
      })
   }

   const singInWithFacebook = async (
      credentials?: Omit<SignInWithOAuthCredentials, 'provider'>,
   ): Promise<OAuthResponse> => {
      return await supabase.auth.signInWithOAuth({
         provider: availableProviders.FACEBOOK,
         ...credentials,
      })
   }

   const singInWithApple = async (
      credentials?: Omit<SignInWithOAuthCredentials, 'provider'>,
   ): Promise<OAuthResponse> => {
      return await supabase.auth.signInWithOAuth({
         provider: availableProviders.APPLE,
         ...credentials,
      })
   }

   const logout = async (): Promise<{ error: AuthError | null }> => {
      return await supabase.auth.signOut()
   }

   const getCurrentUser = async () => {
      const user = await supabase.auth.getUser()
      setUser(user?.data?.user ?? null)
   }

   useEffect(() => {
      getCurrentUser()

      supabase.auth.onAuthStateChange(async (event, session) => {
         setUser(session?.user ?? null)
         // setLoading(false)
      })
   }, [])

   return {
      user,
      singUp,
      singIn,
      logout,
      singInWithGoogle,
      singInWithFacebook,
      singInWithApple,
   }
}
