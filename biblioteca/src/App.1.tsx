import { useState} from 'react';
import Book from './assets/model/Book';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FormStyled } from './assets/components/form';
import { CardBook } from './assets/components/cardBook';


export function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publication, setPublication] = useState(new Date());
  const [description, setDescription] = useState('');

  function newBook(event:any) {
    event.preventDefault();
    if (!title || !author || !genre || !publication || !description) return;
    const addBook: Book = {
      id: Date.now().toString(),
      title,
      author,
      publication,
      register: new Date(),
      genre,
      description,
    };
    setBooks([...books, addBook]);
  }

  function formatDate(date: Date) {
    return format(date, "dd MMMM yyyy", { locale: enUS }); 
  }
  



  return (
    <FormStyled>
      <form action="register">
        <label htmlFor="title">Book's name:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book's name"
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author"
          required
        />

        <label htmlFor="genre">Book genre:</label>
        <input
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          placeholder="Book genre"
          required
        />

        <label>Register Date:</label>
        <input
          value={formatDate(new Date())}
          type="text"
          disabled
        />

        <label htmlFor="publication">Publication Date:</label>
        <input
          value={publication.toISOString().split('T')[0]}
          onChange={(e) => setPublication(new Date(e.target.value))}
          type="date"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          required
        />

        <input type="submit" onClick={newBook} />
      </form>

      <div>
        {books.map((book) => (
          <CardBook key={book.id}>
            <ul>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li>{book.genre}</li>
              <li>{formatDate(book.publication)}</li>
              <li>{book.register.toString()}</li>
              <li>{book.description}</li>
            </ul>
          </CardBook>
        ))}
      </div>
    </FormStyled>
  );
}