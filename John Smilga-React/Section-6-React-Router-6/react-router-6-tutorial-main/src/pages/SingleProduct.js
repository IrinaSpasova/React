import {Link, useParams} from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
 // console.log(useParams());
 const {productId} = useParams();
 const product = products.find((product)=> product.id===productId);
 const {image, name} = product;
  return (
    <section className='section product'>
      <img src={image} alt={name}/>
      <h4>{productId}</h4>
      <Link to='/products' className='btn'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
