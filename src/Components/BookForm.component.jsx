import React,{ useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext.component';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK', 
            book: {
                title,
                author
            }
        });
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="book-title" 
                value={title} 
                placeholder='book title' 
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input 
                type="text" 
                name="book-author" 
                value={author} 
                placeholder='book author'
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input type="submit" value="Add Book"/>
        </form>
    );
}

export default BookForm;
