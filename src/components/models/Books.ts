export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  available: boolean;
}

// src/components/models/Books.ts

export enum Genre {
  Fantasy = 'Fantasy',
  ScienceFiction = 'Science Fiction',
  Romance = 'Romance',
  Mystery = 'Mystery',
  NonFiction = 'Non-fiction'
}
