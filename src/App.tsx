import { RouterProvider } from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


import { AuthProvider } from './providers/AuthProvider/AuthProvider'
import { router } from './router/router'

const queryClient = new QueryClient()

function App() {
   return (
      <div className='App'>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
               <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
      </div>
   )
}

export default App
