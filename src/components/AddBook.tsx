import React, { useState } from 'react';
import { useBookContext } from './models/context/BookContext';
import { Genre } from './models/Books';



// ✅ Përdor enum-in Genre si duhet
const allowedGenres: Genre[] = [
  Genre.Fantasy,
  Genre.ScienceFiction,
  Genre.Romance,
  Genre.Mystery,
  Genre.NonFiction
];

const AddBook: React.FC = () => {
  const { addBook } = useBookContext();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const validate = (): boolean => {
    const newErrors: string[] = [];

    if (!title) newErrors.push('Titulli është i detyrueshëm');
    else if (title.length > 25) newErrors.push('Titulli nuk mund të ketë më shumë se 25 karaktere');

    if (!author) newErrors.push('Autori është i detyrueshëm');
    else if (!/^([A-Z][a-z]*)\s([A-Z][a-z]*)$/.test(author)) {
      newErrors.push('Çdo fjalë e autorit duhet të fillojë me shkronjë të madhe');
    }

    if (!year) newErrors.push('Viti është i detyrueshëm');
    else if (parseInt(year) > new Date().getFullYear()) {
      newErrors.push('Viti nuk mund të jetë në të ardhmen');
    }

    if (!genre) newErrors.push('Zhanri është i detyrueshëm');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addBook({
      title,
      author,
      genre: genre as Genre
    });

    // Reset form fields
    setTitle('');
    setAuthor('');
    setYear('');
    setGenre('');
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shto Libër</h2>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
      <div>
        <label>Titulli:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Autori:</label>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Viti:</label>
        <input type="number" value={year} onChange={e => setYear(e.target.value)} />
      </div>
      <div>
        <label>Zhanri:</label>
        <select value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="">-- Zgjidh zhanrin --</option>
          {allowedGenres.map((g, i) => (
            <option key={i} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Shto</button>
    </form>
  );
};

export default AddBook;
