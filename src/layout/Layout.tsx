import { FC } from 'react'
import { Outlet } from 'react-router'

import { Container } from '../components/common/Container/Container'
import { Header } from './Header/Header'

export const Layout: FC = () => {
   return (
      <Container>
         <Header />
         <Outlet />
      </Container>
   )
}
