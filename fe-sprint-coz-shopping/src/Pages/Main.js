import React, { useEffect } from 'react';
import MainStyle from '../Components/MainStyle';
import StyleProduct from '../Components/StyleProduct';
import StyleCategory from '../Components/StyleCategory';
import StyleBrand from '../Components/StyleBrand';
import StyleExhibition from '../Components/StyleExhibition';
import { useState } from 'react';
import Loading from '../Components/Loading'

const Main = () => {
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
    if(loading){
        return (    
            <section className='mainpage-section'>
            <h2 className='main-title product-list-title'>상품 리스트</h2> 
            <Loading />  
            <h2 className='main-title bookmark-list-title'>북마크 리스트</h2>   
            <Loading />  
            </section>
        )
    }
        return (
            <>
            <section className='mainpage-section'>
                <h2 className='main-title product-list-title'>상품 리스트</h2> 
                <MainStyle>
                {products.map((product)=>{     
                    console.log(product)        
                    if(product.type==="Product"){
                        return <StyleProduct item={product}/>
                    }
                    if(product.type==="Category"){
                        return <StyleCategory item={product}/>
                    }
                    if(product.type==="Exhibition"){
                        return <StyleExhibition item={product}/>
                    }
                    if(product.type==="Brand"){
                        return <StyleBrand item={product}/>
                    }
                    return null;
                })}
                 </MainStyle>
                <h2 className='main-title bookmark-list-title'>북마크 리스트</h2>     
            </section>
            </>
        )
}

export default Main;