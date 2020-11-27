import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const ItemContext = createContext();

export function ItemProvider(props) {
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        Axios.get(`https://iconic-store-serv.herokuapp.com/api/publicItem`)
    .then(res => {
        setItems(res.data);
    })
    }, [])
    
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}