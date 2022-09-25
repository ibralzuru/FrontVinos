import { configureStore } from '@reduxjs/toolkit'
import carritoSlice from './containers/ProductDetail/carritoSlice'
import userSlice from './userSlice'

//funcion que devuelve el nuevo estado
export default configureStore({
  reducer: {
    user: userSlice,
    carrito: carritoSlice
  }
})