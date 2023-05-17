import React from 'react';
import MainStyle from '../Components/MainStyle'

const Main = () => {
    return (
        <>
        <section className='mainpage-section'>
            <h2 className='main-title product-list-title'>상품 리스트</h2>
            <h2 className='main-title bookmark-list-title'>북마크 리스트</h2>
            <MainStyle/>            
        </section>
        </>
    )
}

export default Main;