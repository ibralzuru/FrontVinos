import { createSlice } from '@reduxjs/toolkit';

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    products: []
  },
  reducers: {
    addProductToCarrito: (state, action) => {
      const newProduct = action.payload
      console.log("newProduct: ", newProduct)
      state.products.push(newProduct)
    }
  },
});

export const addProduct = (producto) => async (dispatch) => {
  console.log('Producto agregado a carrito: ', producto);
  dispatch(addProductToCarrito(producto));
};




export const { addProductToCarrito } = carritoSlice.actions;


export const getCarrito = (state) => {
  return state.carrito;
}
export default carritoSlice.reducer;