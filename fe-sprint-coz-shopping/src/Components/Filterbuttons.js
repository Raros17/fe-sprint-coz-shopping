import React from 'react';

const Filterbuttons = () => {    
    return (
        <section className='filterbuttons-area'>
            <ul>
                <li><img src={ require('../Image/filter-image1.png') } /><span className='filter-selected'>전체</span></li>
                <li><img src={ require('../Image/filter-image2.png') } /><span>상품</span></li>
                <li><img src={ require('../Image/filter-image3.png') } /><span>카테고리</span></li>
                <li><img src={ require('../Image/filter-image4.png') } /><span>기획전</span></li>
                <li><img src={ require('../Image/filter-image5.png') } /><span>브랜드</span></li>
            </ul>
        </section>
    )
}

export default Filterbuttons;