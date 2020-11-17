import React, { useState, createContext, useEffect } from 'react';

export const IsLoggedContext = createContext();

export function IsLoggedProvider(props) {
    const [log, setLog] = useState ([])
    return (
        <IsLoggedContext.Provider value={[log, setLog]}>
            {props.children}
        </IsLoggedContext.Provider>
    );
}