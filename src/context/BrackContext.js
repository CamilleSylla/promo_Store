import React, { useState, createContext, useEffect } from 'react';

export const BracketContext = createContext();

export function BracketProvider(props) {
    const [bracket, setBracket] = useState([]);


    return (
        <BracketContext.Provider value={[bracket, setBracket]}>
            {props.children}
        </BracketContext.Provider>
    );
}