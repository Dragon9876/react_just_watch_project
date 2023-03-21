import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { PrivateRoutes } from '../components/common/PrivateRoutes/PrivateRoutes'
import { Home, Layout, New, Popular, PopularMovie, Root, SingIn, SingUp, Watchlist } from '../pages'

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path='/' element={<Root />} />
         <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
               <Route path='home' element={<Home />} />
               <Route path='new' element={<New />} />
               <Route path='popular' element={<Popular />} />
               <Route path='popular/movie/:movieId' element={<PopularMovie />} />
               <Route path='watchlist' element={<Watchlist />} />
            </Route>
         </Route>

         <Route path='/sing-in' element={<SingIn />} />
         <Route path='/sing-up' element={<SingUp />} />
      </Route>,
   ),
)
