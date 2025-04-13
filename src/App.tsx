import React from 'react';
import { BookProvider } from './components/models/context/BookContext';
import BookList from './components/BookList';
import AddBook from './components/AddBook'; // nëse ke formën për të shtuar libra

const App: React.FC = () => {
  return (
    <BookProvider>
      <div>
        <h1>Libra</h1>
        <AddBook />       {/* Kjo nëse do të shtosh libra për test */}
        <BookList />      {/* Kjo shfaq librat e futur */}
      </div>
    </BookProvider>
  );
};

export default App;
