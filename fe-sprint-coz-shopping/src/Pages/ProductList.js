import React from 'react';
import { useState, useEffect } from 'react';
import Filterbuttons from '../Components/Filterbuttons';
import Loading from '../Components/Loading';
import { useInView } from 'react-intersection-observer';
import MainItems from '../Components/MainItems';
import useFetchData from '../Data/useFetchData';


const ProductList = () => {
    const { ref, inView } = useInView();
    const [selectedType, setSelectedType] = useState(null);
    const [visible, setVisible] = useState({ start: 0, end: 16 });
    const [products, error, loading] = useFetchData('http://cozshopping.codestates-seb.link/api/v1/products')
    useEffect(() => {
        if (inView) {
            setVisible((prevData) => ({
              start: prevData.start,
              end: prevData.end + 16,
            }));
          }
      }, [inView]);

      useEffect(() => {
        setVisible({ start: 0, end: 16 });
      }, [selectedType]);
      
      return (
        <div>
            <Filterbuttons selectedType={selectedType} setSelectedType={setSelectedType}/>
            <ul>
            {error ? (
          <div>{error}</div>
        ) : (
          products
            .filter((d) => selectedType === null || d.type === selectedType)
            .slice(visible.start, visible.end)
            .map((d, idx) => <MainItems products={d} key={`id${idx}`} />)
        )}
            </ul>
            <div ref={ref}></div>
        </div>
      )

}

export default ProductList;