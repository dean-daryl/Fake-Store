import React from 'react'

const ProductDetails = ({product}) => {
     const [products, setProducts] = useState([]);
     const fetchProductData = () => {
       fetch(`https://api.escuelajs.co/api/v1/products/${product.id}`)
         .then((response) => {
           return response.json();
         })
         .then((data) => {
           setProducts(data);
         });
     };
     useEffect(() => {
       fetchProductData();
     }, []);
  return (
    <div>
        <div className='product-detail-container '>
            <div className='image-container'>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails