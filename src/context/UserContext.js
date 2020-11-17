import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {
    const [log, setLog] = useState(true);
    const [user, setUser] = useState ([])
    
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}
