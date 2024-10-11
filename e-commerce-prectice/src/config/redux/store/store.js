import { configureStore } from '@reduxjs/toolkit'
import  cartreducer  from '../reducer/CartSlice'

export const store = configureStore({
  reducer: {
    cart:cartreducer
  },
})

