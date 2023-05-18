import React from 'react';
import '../Components/Component.css';
const StyleProduct = (item) => {
    
    return (
        <>
        <div className='product-products'>{/*눈물...왜 이미지 안뜰까요?*/}      
            <div className='product-image'><img src={item.image_url}/><i className="fa-solid fa-star"></i></div>
            <div className='product-inform'>
                <div>
                    <span className='product-name'>{item.title}</span>
                    <span className='product-percent'>{item.discountPercentage}%</span>
                </div>
                <span className='product-price'>{item.price}원</span>
            </div>
            </div>
        </>
    )
}

export default StyleProduct;