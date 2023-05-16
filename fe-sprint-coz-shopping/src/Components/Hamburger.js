import React from 'react';
import { Link } from 'react-router-dom';
const Hamburger = () => {
    return (
        <div className="hamburger-list">
            <ul>
                <li>양효정님, 안녕하세요!</li>
                <Link to="/products/list"><li><i className="fa-solid fa-gift"></i>상품리스트 페이지</li></Link>
                <Link to="/bookmark"><li Link to="/bookmark"><i className="fa-regular fa-star"></i>북마크 페이지</li></Link>                
            </ul>
        </div>
    )
}

export default Hamburger;