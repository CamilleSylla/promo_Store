import React, { useState, createContext, useEffect } from 'react';

export const BracketContext = createContext();

export function BracketProvider(props) {
    const [bracket, setBracket] = useState([{
        notExist: "a été ajouté a votre panier",
        Exist: "Vous Possèdé deja cette articles dans votre panier",
    }]);


    return (
        <BracketContext.Provider value={[bracket, setBracket]}>
            {props.children}
        </BracketContext.Provider>
    );
}