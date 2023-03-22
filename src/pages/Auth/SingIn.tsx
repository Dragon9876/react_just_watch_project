import { ChangeEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Input } from '../../components'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'

export const SingIn = () => {
   const { user, singIn } = useAuth()
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: '',
   })
   const handleSetLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setLoginInfo({
         ...loginInfo,
         [name]: value,
      })
   }
   const handleSignInWithEmail = async () => {
      await singIn({
         email: loginInfo.email,
         password: loginInfo.password,
      })
   }

   useEffect(() => {
      if (user !== null) {
         navigate('/popular')
      }
   }, [user])

   return (
      <div>
         SingIn
         <Input
            onInput={(event) => handleSetLoginInfo(event)}
            value={loginInfo.email}
            name='email'
         />
         <Input
            onInput={(event) => handleSetLoginInfo(event)}
            value={loginInfo.password}
            name='password'
         />
         <button onClick={() => handleSignInWithEmail()}>Sing In</button>
         <div>
            Please use this email and password to sing in into my account
            <div>email: unreal.engine.game212@gmail.com</div>
            <span>password: 123456</span>
         </div>
      </div>
   )
}
