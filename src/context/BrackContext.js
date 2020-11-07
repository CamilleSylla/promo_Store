import React, { useState, createContext, useEffect } from 'react';

export const BracketContext = createContext();

export function BracketProvider(props) {
    const [bracket, setBracket] = useState([]);


    return (
        <ItemContext.Provider value={[bracket, setBracket]}>
            {props.children}
        </ItemContext.Provider>
    );
}