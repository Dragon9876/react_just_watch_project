import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from '../services/api'

export const store = configureStore({
   reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
   },
   middleware: () => getDefaultMiddleware().concat(moviesApi.middleware),
})

setupListeners(store.dispatch)
