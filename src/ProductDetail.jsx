import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Layout, Product } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/features/products/productSlice';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
   
  const { id } = useParams();
  const product_id = id;
  const dispatch = useDispatch();
  const fetchProductData = () => {
    fetch(`https://api.escuelajs.co/api/v1/products/${product_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchProductData();
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  const mayLike_products = useSelector((state) => state.product);
   const currentProducts = mayLike_products.products.slice(
     firstPostIndex,
     lastPostIndex,
   );

  return (
    <Layout>
      <div>
        <div className="product-detail-container ">
          <div>
            <div className="image-container">
              <img src={products.images} className="product-detail-image" />
            </div>
            <div className="small-images-container">
              <img
                src={products.images}
                className="small-image selected-image"
              />
            </div>
          </div>
          <div className="product-detail-desc">
            <h1>{products.title}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(10)</p>
            </div>
            <h4>Details: </h4>
            <p>{products.description}</p>
            <p className="price">${products.price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>
                <span className="num" onClick="">
                  0
                </span>
                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick="">
                Add To Cart
              </button>
              <button type="button" className="buy-now" onClick="">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {currentProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
