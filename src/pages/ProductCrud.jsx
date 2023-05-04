import React from 'react';
import { Layout } from '../components';

const ProductCrud = () => {
  return (
    <Layout>
      <div className="crud-buttons">
        <a href="/AddProduct">
          <button>Add Product</button>
        </a>
        <a href="/DeleteProduct">
          <button>Delete Product</button>
        </a>
        <a href="/DeleteProduct">
          <button>Update Product</button>
        </a>
      </div>
    </Layout>
  );
};

export default ProductCrud;
