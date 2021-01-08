import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer( bookReducer, [], () => {
        const localBooks = localStorage.getItem('books');
        return localBooks ? JSON.parse(localBooks) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;
