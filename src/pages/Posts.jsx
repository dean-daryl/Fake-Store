import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/products/productSlice';
import { Layout } from '../components';

const Posts = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('1');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('categoryId', category);
    formData.append('image', image);
    dispatch(addProduct(formData));
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('1');
    setImage(null);
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </label>
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </Layout>
  );
};

export default Posts;
