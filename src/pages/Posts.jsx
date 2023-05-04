import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/features/products/productSlice';
import { Layout } from '../components';

const Posts = () => {
      const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategory] = useState('1');
  const [images, setImage] = useState(['']);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        images,
        title,
        description,
        categoryId,
        price,
      }),
    );
    window.location.href=`https://api.escuelajs.co/api/v1/products/?title=${title}`
  };

  return (
    <Layout>
      <div className="form-container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Category:
            <select
              value={categoryId}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </label>
          <label>
            Image:
            <input
              type="text"
              value={images}
              onChange={(e) => setImage([`${e.target.value}`])}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </Layout>
  );
};

export default Posts;
