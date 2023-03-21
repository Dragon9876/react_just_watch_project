import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { AuthProvider } from './providers/AuthProvider/AuthProvider'
import { router } from './router/router'

import { store } from './store/store'

function App() {
   return (
      <div className='App'>
         <Provider store={store}>
            <AuthProvider>
               <RouterProvider router={router} />
            </AuthProvider>
         </Provider>
      </div>
   )
}

export default App
