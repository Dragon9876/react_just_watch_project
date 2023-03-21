import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../../providers/AuthProvider/AuthProvider'

export const PrivateRoutes: FC = () => {
   const { user } = useAuth()

   return <>{user !== null ? <Outlet /> : <Navigate to='/sing-in' />}</>
}
