import { Link } from 'react-router-dom';
const Hamburger = () => {
    return (
        <div className="hamburger-list">
            <ul>
                <li>양효정님, 안녕하세요!</li>
                <li ><i className="fa-solid fa-gift"></i>상품리스트 페이지</li>
                <li><i className="fa-regular fa-star"></i>북마크</li>
            </ul>
        </div>
    )
}

export default Hamburger;