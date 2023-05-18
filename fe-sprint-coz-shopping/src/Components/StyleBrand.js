import React from 'react';
import '../Components/Component.css';
const StyleBrand = (item) => {
    return (
        <>
        <div className='product-products'>
            <div className='product-image'><div className={item.image_url}></div><i className="fa-solid fa-star"></i></div>
            <div className='product-inform'>
                <div>
                    <span className='product-name'>{item.brand_name}</span>
                    <span className='product-customer-count'>{item.follower}</span>
                </div>
                <span className='customer-count'>0,000</span>
            </div>
        </div>
        </>
    )
}

export default StyleBrand;