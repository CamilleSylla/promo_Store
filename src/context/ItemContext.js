import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const ItemContext = createContext();

export function ItemProvider(props) {
    const [items, setItems] = useState([]);

    useEffect(async () => {
        await axios.get(`/api/publicItem`)
            .then(res => {
                const data = res.data;
                for (var i = 0; i <= data.length; i++) {
                    setItems([data]);
                 }
            })
            .catch(err => {
                    console.log(err);
            })
    }, []
    )

    return (
        <ItemContext.Provider value={[items]}>
            {props.children}
        </ItemContext.Provider>
    );
}