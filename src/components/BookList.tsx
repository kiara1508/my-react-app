// src/components/BookList.tsx
import React from 'react';
import styles from './BookList.module.css';
import { useBookContext } from './models/context/BookContext';


const BookList: React.FC = () => {
  const { books, deleteBook, toggleBook } = useBookContext();

  return (
    <div>
      {books.map(book => (
        <div
          key={book.id}
          className={`${styles.bookCard} ${!book.available ? styles.unavailable : ''}`}
        >
          <p><strong>Titulli:</strong> {book.title}</p>
          <p><strong>Autori:</strong> {book.author}</p>
          <p><strong>Zhanri:</strong> {book.genre}</p>

          <button onClick={() => deleteBook(book.id)}>Fshi Librin</button>

          {book.available && (
            <button onClick={() => toggleBook(book.id)}>Ndrysho Gjendjen</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
