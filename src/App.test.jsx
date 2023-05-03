import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProducts } from './redux/features/products/productSlice';

const mockStore = configureMockStore([thunk]);

// Create a mock axios module
jest.mock('axios');

describe('productSlice', () => {
  describe('fetchProducts', () => {
    it('should dispatch fetchProducts.fulfilled when API call is successful', async () => {
      // Set up the mock API response
      const products = [{ id: 1, name: 'Product 1' }];
      axios.get.mockResolvedValueOnce({ data: products });

      // Set up the initial store state and dispatch the action
      const store = mockStore({
        product: { loading: false, products: [], error: '' },
      });
      await store.dispatch(fetchProducts());

      // Check that the correct actions were dispatched
      const actions = store.getActions();
      expect(actions[0].type).toEqual('user/fetchProducts/pending');
      expect(actions[1].type).toEqual('user/fetchProducts/fulfilled');
      expect(actions[1].payload).toEqual(products);
    });
  });
});
