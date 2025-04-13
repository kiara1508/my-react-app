// src/context/BookContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../Books'; // <- saktë sipas strukturës tënde

interface BookContextType {
  books: Book[];
  addBook: (book: Omit<Book, 'id' | 'available'>) => void;
  deleteBook: (id: number) => void;
  toggleBook: (id: number) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("BookContext must be used within BookProvider");
  return context;
};

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (bookData: Omit<Book, 'id' | 'available'>) => {
    const newBook: Book = {
      ...bookData,
      id: Date.now(),
      available: true,
    };
    setBooks(prev => [...prev, newBook]);
  };

  const deleteBook = (id: number) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const toggleBook = (id: number) => {
    setBooks(prev =>
      prev.map(book =>
        book.id === id ? { ...book, available: !book.available } : book
      )
    );
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, toggleBook }}>
      {children}
    </BookContext.Provider>
  );
};
