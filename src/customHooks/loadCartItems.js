import { useEffect, useState } from "react";

const useLoadCardItems = () => {
    const [cartTotalItem, setCartTotalItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carditems')
        .then( res => res.json() )
            .then(data => setCartTotalItem(data) )
    }, [])
    return cartTotalItem
}

export default useLoadCardItems;

