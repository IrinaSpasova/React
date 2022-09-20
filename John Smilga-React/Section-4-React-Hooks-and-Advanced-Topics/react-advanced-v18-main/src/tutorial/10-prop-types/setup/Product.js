import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg'
// 02. import this:
import PropTypes from 'prop-types';

// important shortcuts: 4:25
//https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22416488#questions/14384820


const Product = ({ image, name, price }) => {
  // 01: check the props types: console.log(image, name, price);
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>our products</h4>
      {/* How to handle errors: 08:50 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22416474#questions/14384820 */}
    {/* <img src={image.url} alt={name} />   explanation why {image.url || defaultImage} is not working: 1.50 :https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22416488#questions/14384820*/}
    <img src={url || defaultImage} alt={name || 'default name'} />
    <h4>{name}</h4>
    <p>${price || 'n/a'}</p> 
    </article>);
};

//03. check and define values:
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps ={
//   name: 'default name',
//   price: 0.00,
//   image: defaultImage // 06.55 how to handle image https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22416482#questions/14384820
// }


export default Product;
