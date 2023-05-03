import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App.jsx';
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './index.css';
import ProductDetail from './productDetail.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ProductCrud from './pages/ProductCrud.jsx';
import Posts from './pages/Posts.jsx';

// export default function router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route index element={<App/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductCrud />} />
          <Route path="/AddProduct" element={<Posts/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
