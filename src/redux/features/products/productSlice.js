import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState ={
    loading:false,
    products:[],
    error:''
}
export const fetchProducts = createAsyncThunk('user/fetchProducts', () => {
  return axios
    .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    .then((response) => response.data);
});
export const addProduct = createAsyncThunk(
  'user/addProduct',
  async (newProduct) => {
    const response = await axios.post( 
      'https://api.escuelajs.co/api/v1/products/',
      newProduct,
    );
    return response.data;
  },
);
export const deleteProduct = createAsyncThunk(
  'user/addProduct',
  async (newProduct) => {
    const response = await axios.delete(
      'https://api.escuelajs.co/api/v1/products/:id',
      newProduct,
    );
    return response.data;
  },
);
const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})
export default productSlice.reducer
