import React, { useState, createContext, useEffect } from 'react';

export const ItemContext = createContext();

export function ItemProvider(props) {
    const [items, setItems] = useState([]);


    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}