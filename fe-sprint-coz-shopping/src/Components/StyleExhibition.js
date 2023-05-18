import React from 'react';
import '../Components/Component.css';
const StyleExhibition = (item) => {
    return (
        <>
        <div className='product-products'>
            <div className='product-image'><div className={item.image_url}></div><i className="fa-solid fa-star"></i></div>
            <div className='product-inform'>
                <div>
                    <span className='product-name'>{item.title}</span>
                </div>
                <span className='product-detail'>{item.sub_title}</span>
            </div>
        </div>
        </>
    )
}

export default StyleExhibition;