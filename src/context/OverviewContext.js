import React, { useState, createContext, useEffect } from 'react';

export const OverviewContext = createContext();

export function OverviewProvider(props) {
    const [target, setTarget] = useState ([])
    return (
        <OverviewContext.Provider value={[target, setTarget]}>
            {props.children}
        </OverviewContext.Provider>
    );
}