import { useState, useEffect } from 'react';
function useFetchData(url) {    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false);
        } 
        catch (error) {
            setLoading(false);
            setError('데이터 가져오는 중 에러 발생')
            console.log(error)
        }
    };

    useEffect(()=>{
        fetchProducts()
    }, [url]);
   return [products, error, loading]
}

export default useFetchData;