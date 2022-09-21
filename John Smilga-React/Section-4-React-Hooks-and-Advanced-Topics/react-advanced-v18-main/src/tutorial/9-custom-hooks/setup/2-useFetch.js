import { useCallback } from 'react';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = useCallback(async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    },[url]);
  
    useEffect(() => {
      getProducts()
    }, [url,getProducts])
    
    return{ loading, products };
};
// important- we can cause loop here without useCallback!
// https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22435914#questions/16545804