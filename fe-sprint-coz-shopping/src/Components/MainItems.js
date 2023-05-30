import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../Store/Modal";
import { bookmarkActions } from "../Store/Bookmark";

const MainItems = ({products}) => {     
 const dispatch = useDispatch();
 const isMarked = useSelector((state) => state.bookmark.includes(products.id));

 const clickBookmarkHandler = (event) => {
   event.stopPropagation();
   dispatch(bookmarkActions.toggleBookmark(products.id));
 };
 const clickModalOpenHandler = () => {
   dispatch(modalActions.open());
   dispatch(modalActions.showModal(products));
 };

if(!products){
    return null;
 }  
 return (
<li className='itemContainer'>
      <div className='imgContainer' onClick={clickModalOpenHandler}>
        <img
          className='productImg'
          key={products.id}
          src={products.image_url || products.brand_image_url}
          alt={products.name}
        ></img>
        <img
          onClick={clickBookmarkHandler}
          className='boomarkIconToggle'
        ></img>
      </div>
      <div className='description'>
        {products.type === 'Product' ? (
          <div className='product-products'>
            <h3 className='product-name'>{products.title}</h3>
            <div>
              <div
                className='product-discount'
              >{`${products.discountPercentage}%`}</div>
              <div className='product-price'>{products.price}원</div>
            </div>
          </div>
        ) : products.type === "Category" ? (
          <div className='product-category'>
            <h3 className='product-name'>{`# ${products.title}`}</h3>
          </div>
        ) : products.type === "Exhibition" ? (
          <div className='product-exhibition'>
            <h3 className='product-name'>{products.title}</h3>
            <div className='product-detail'>{products.sub_title}</div>
          </div>
        ) : (
          <div className='product-brand'>
            <h3 className='product-name'>{products.brand_name}</h3>
            <div>
              <div className='product-follower'>관심고객수</div>
              <div
                className='product-follower-number'
              >{`${products.follower.toLocaleString()}`}</div>
            </div>
          </div>
        )}
      </div>
    </li>
 )
}

export default MainItems;