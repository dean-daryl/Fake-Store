import React, { useEffect, useState } from 'react';
import { HeroBanner, FooterBanner, Product, Layout } from './components';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from './redux/features/products/productSlice';

const Home = () => {
  const [currentPage,setCurrentPage]=useState(1)
  const[postsPerPage,setPostsPerPage] = useState(20)
  const products= useSelector(state=>state.product)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const lastPostIndex =currentPage*postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentProducts=products.products.slice(firstPostIndex,lastPostIndex  )
  return (
    <Layout>
      <div>
        {products.loading && (
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
        )}
        {!products.loading && products.error ? (
          <div>Something went wrong....</div>
        ) : null}

        <HeroBanner />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Products of many variations </p>
        </div>
        <div className="products-container">
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
