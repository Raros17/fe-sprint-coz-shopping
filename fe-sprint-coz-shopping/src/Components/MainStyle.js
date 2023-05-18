import React from 'react';
import { useState } from 'react';
import StyleProduct from './StyleProduct'
import StyleCategory from './StyleCategory'
import StyleExhibition from './StyleExhibition'
import StyleBrand from './StyleBrand'

const MainStyle = (products) => {    
    const filterTypes = (type) => {
        if(type==="Product"){
            return (
        <ul>            
            {products.map(
                (product)=>(          
                <StyleProduct
                key={product.id}
                id={product.id}
                image={product.image_url}
                discount={product.discountPercentage}
                price={product.price}
                title={product.title}
                />
                    ))}
            </ul>
            )
        } else if(type==="Category"){
            return (<ul>            
                {products.map(
                    (product)=>(          
                    <StyleCategory
                    key={product.id}
                    id={product.id}
                    image={product.image_url}
                    discount={product.discountPercentage}
                    price={product.price}
                    title={product.title}
                    />
                        ))}
                </ul>)
        } else if(type ==="Exhibition"){
            return <StyleExhibition/>
        } else if(type ==="Brand"){
            return <StyleBrand/>
        }
    }
}

export default MainStyle;