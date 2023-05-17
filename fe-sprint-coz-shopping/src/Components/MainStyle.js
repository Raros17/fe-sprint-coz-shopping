import React from 'react';
import { Link } from 'react-router-dom';
import StyleProduct from './StyleProduct'
import StyleCategory from './StyleCategory'
import StyleExhibition from './StyleExhibition'
import StyleBrand from './StyleBrand'
import Modal from './Modal'

const MainStyle = () => {
    return (
        <>
        <StyleProduct/>
        <StyleCategory/>
        <StyleExhibition/>
        <StyleBrand/>
        </>
    )
}

export default MainStyle;