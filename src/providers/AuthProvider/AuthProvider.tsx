import { createContext, FC, ReactNode, useContext } from 'react'

import type {
   AuthError,
   AuthResponse,
   OAuthResponse,
   SignInWithOAuthCredentials,
   SignInWithPasswordCredentials,
   SignUpWithPasswordCredentials,
   User,
} from '@supabase/supabase-js'

import { useProvideAuth } from '../../hooks/useProvideAuth'

interface IAuthContext {
   user: User | Record<string, never> | null
   singUp: (credentials: SignUpWithPasswordCredentials) => Promise<AuthResponse>
   singIn: (credentials: SignInWithPasswordCredentials) => Promise<AuthResponse>
   singInWithGoogle: (
      credentials: Omit<SignInWithOAuthCredentials, 'provider'>,
   ) => Promise<OAuthResponse>
   singInWithFacebook: (
      credentials: Omit<SignInWithOAuthCredentials, 'provider'>,
   ) => Promise<OAuthResponse>
   singInWithApple: (
      credentials: Omit<SignInWithOAuthCredentials, 'provider'>,
   ) => Promise<OAuthResponse>
   logout: () => Promise<{ error: AuthError | null }>
}

const AuthContext = createContext({} as IAuthContext)

interface IAuthProvider {
   children: ReactNode
}

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const auth: IAuthContext = useProvideAuth()
   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
   return useContext(AuthContext)
}
