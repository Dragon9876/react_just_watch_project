import { ChangeEvent, useState } from 'react'

import { Input } from '../../components'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'

export const SingUp = () => {
   const auth = useAuth()
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
   const handleSigUpWithEmail = async () => {
      await auth.singUp({ email: loginInfo.email, password: loginInfo.password })
   }
   // useEffect(() => {
   //     console.log("loginInfo", loginInfo);
   // }, [loginInfo]);
   // useEffect(() => {
   //     console.log("auth ======== ", auth);
   // }, [])

   return (
      <div>
         SingUp
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
         <button onClick={() => handleSigUpWithEmail()}>Sing Up</button>
      </div>
   )
}
