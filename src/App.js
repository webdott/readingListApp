import React from 'react';
import BookForm from './Components/BookForm.component';
import BookList from './Components/BookList.component';
import Navbar from './Components/Navbar.component';
import BookContextProvider from './contexts/BookContext.component';

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
