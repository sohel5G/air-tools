import { useEffect, useState } from "react";

const useLoadCardItems = () => {
    const [cartTotalItem, setCartTotalItem] = useState([]);

    useEffect(() => {
        fetch('https://aircraftengineersstore-backend-cnbayybtd.vercel.app/carditems')
            .then(res => res.json())
            .then(data => setCartTotalItem(data))
    }, [])
    return cartTotalItem
}

export default useLoadCardItems;

