import React, { useEffect, useState } from 'react';
import { HeroBanner, FooterBanner, Product, Layout } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/features/products/productSlice';

const Home = () => {
 
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Layout>
      <div>
        <HeroBanner />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Products of many variations </p>
        </div>
        {!products.loading && products.error ? (
          <div className="products-container">Oops!🙊🙊Something went wrong....</div>
        ) : null}
        {products.loading && (
          <div className="products-container">
            {' '}
            <div class="spinner center">
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
            </div>
          </div>
        )}
        {!products.loading && products.products.length ? (
          <div className="products-container">
            {products.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Home;
