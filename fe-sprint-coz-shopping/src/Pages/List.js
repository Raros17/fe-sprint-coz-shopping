import React from 'react';
import { useState, useEffect } from 'react';
import Filterbuttons from '../Components/Filterbuttons';
import Loading from '../Components/Loading';
import StyleCategory from '../Components/StyleCategory';
const List = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://cozshopping.codestates-seb.link/api/v1/products');
            const products = await response.json();
            setProducts(products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    };
    useEffect(()=>{
        fetchProducts()
    }, []);
   console.log(products)
   if(loading){
    return (
        <section className='productslist-section'>
        <Filterbuttons/> 
        <Loading />         
        </section>
    )
   }
    return (
        <section className='productslist-section'>
            <Filterbuttons/>   
            <ul>
                {products.map((product)=>(
                <StyleCategory                
                key={product.id}
                id={product.id}
                image={product.image_url}
                discount={product.discountPercentage}
                price={product.price}
                title={product.title}
                />
                ))}
            </ul>
        </section>
    )
}

export default List;