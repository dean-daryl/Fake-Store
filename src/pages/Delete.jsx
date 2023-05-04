import React, { useEffect } from 'react';
import { Layout, Product } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/products/productSlice';
import axios from 'axios';

const Delete = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  function handleDelete(id) {
    axios
      .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        alert('Product deleted successfully');
        window.location.reload();
        // handle successful response
      })
      .catch((error) => {
        alert('Something went wrong ');

        // handle error
      });
  }
  return (
    <Layout>
      <div className="products-to-delete">
        {products.products.map((product) => (
          <div class="card">
            <img src={product.images} className="small-image delete-image" />

            <div class="content">
              <span class="title">{product.title}</span>

              <span class="price">${product.price}</span>
            </div>
            <button
              type="button"
              class="close"
              onClick={() => handleDelete(product.id)}
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Delete;
