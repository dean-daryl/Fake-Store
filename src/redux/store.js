import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/features/products/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
