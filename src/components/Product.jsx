import React from 'react';

const Product = ({ product: { id, images, title, price } }) => {
  return (
    <div>
      <a href={`/products/${id}`}>
        <div className="product-card">
          <img
            src={images[0]}
            width={250}
            height={250}
            alt=""
            className="product-image"
          />
          <p className="product-name">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </a>
    </div>
  );
};

export default Product;
