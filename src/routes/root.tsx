import { useState } from 'react';
import { formatDate } from '../assets/components/functions';
import Modal from 'react-modal';
import Book from '../assets/model/Book';
import { FormStyled } from '../assets/components/form';
import { CardBook } from '../assets/components/cardBook';
import { ButtonStyled } from '../assets/components/Button';

export function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setyear] = useState(new Date());
  const [description, setDescription] = useState('');

  const [modalTitle, setModalTitle] = useState('');
  const [modalAuthor, setModalAuthor] = useState('');
  const [modalGenre, setModalGenre] = useState('');
  const [modalYear, setModalYear] = useState(new Date());
  const [modalDescription, setModalDescription] = useState('');
  const [modalId, setModalId] = useState(0);
  const [modalRegister, setModalRegister] = useState(new Date());

  function newBook(event: any) {
    event.preventDefault();
    if (!title || !author || !genre || !year || !description) return;
    const addBook: Book = {
      id: Date.now(),
      title,
      author,
      year,
      register: new Date(),
      genre,
      description,
    };
    setBooks([...books, addBook]);
  }

  function resetBook() {
    setTitle('');
    setAuthor('');
    setGenre('');
    setyear(new Date());
    setDescription('');
  }

  function deleteBook(id: number) {
    const certaint = confirm('Are you sure you want to delete this book?');
    if (certaint) {
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks([...updatedBooks]);
      setModalIsOpenView(false);
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function upBook(book: Book) {
    setModalIsOpen(true);

    setModalId(book.id);
    setModalTitle(book.title);
    setModalAuthor(book.author);
    setModalGenre(book.genre);
    setModalRegister(book.register);
    setModalYear(book.year);
    setModalDescription(book.description);
  }

  function saveUpdate() {
    const updatedBook = {
      ...books,
      id: modalId,
      title: modalTitle,
      author: modalAuthor,
      genre: modalGenre,
      register: modalRegister,
      year: modalYear,
      description: modalDescription,
    };

    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);

    setModalIsOpen(false);
    setModalIsOpenView(false);
  }

  const [modalIsOpenView, setModalIsOpenView] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  return (
    <FormStyled>
      <section>
        <form action="register">
          <h1> Register a book </h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book's name"
            required
          />

          <label htmlFor="author">Author</label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
            required
          />

          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a genre
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Biography">Biography</option>
            <option value="Self-Help">Self-Help</option>
            <option value="History">History</option>
            <option value="Poetry">Poetry</option>
            <option value="Other">Other</option>
          </select>

          <label>Registered in:</label>
          <input value={formatDate(new Date())} type="text" disabled />

          <label htmlFor="year"> Published in </label>
          <input
            value={year.toISOString().split('T')[0]}
            onChange={(e) => setyear(new Date(e.target.value))}
            type="date"
            max={today}
            required
          />

          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
            required
          />

          <ButtonStyled onClick={newBook} id="submit">
            {' '}
            Submit{' '}
          </ButtonStyled>
          <ButtonStyled onClick={resetBook} id="reset">
            {' '}
            Reset
          </ButtonStyled>
        </form>
      </section>

      <section>
        {books.length === 0 ? null : (
          <div className="library">
            <h1>Library</h1>

            {books.map((book) => (
              <CardBook key={book.id}>
                <ul>
                  <li>{book.title}</li>
                  <li>{book.author}</li>
                  <li>{formatDate(book.year)}</li>
                  <ButtonStyled
                    onClick={() => setModalIsOpenView(true)}
                    id="seeMore"
                  >
                    See more{' '}
                  </ButtonStyled>
                </ul>

                <div className="view">
                  <Modal
                    isOpen={modalIsOpenView}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="See more"
                    className="custom-modal"
                  >
                    <ul>
                      <li>
                        {' '}
                        <span>Title:</span> {book.title}
                      </li>
                      <li>
                        {' '}
                        <span>Autor:</span> {book.author}
                      </li>
                      <li>
                        {' '}
                        <span>Published in:</span> {formatDate(book.year)}
                      </li>
                      <li>
                        {' '}
                        <span>Genre:</span> {book.genre}
                      </li>
                      <li>
                        {' '}
                        <span>Registered at:</span>
                        {formatDate(book.register)}
                      </li>
                      <li>
                        {' '}
                        <span>Description:</span> {book.description}
                      </li>
                      <div>
                        <ButtonStyled onClick={() => upBook(book)} id="update">
                          Update
                        </ButtonStyled>
                        <ButtonStyled
                          onClick={() => setModalIsOpenView(false)}
                          id="cancel"
                        >
                          {' '}
                          Cancel{' '}
                        </ButtonStyled>
                        <ButtonStyled
                          onClick={() => deleteBook(book.id)}
                          id="delete"
                        >
                          {' '}
                          Delete{' '}
                        </ButtonStyled>
                      </div>
                    </ul>
                  </Modal>
                </div>

                <div className="Edit">
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Exemplo de Modal"
                    className="custom-modal"
                  >
                    <form action="update">
                      <label htmlFor="title"> Title </label>
                      <input
                        type="text"
                        id="title"
                        value={modalTitle}
                        onChange={(e) => setModalTitle(e.target.value)}
                        required
                      />

                      <label htmlFor="author">Author</label>
                      <input
                        id="author"
                        value={modalAuthor}
                        onChange={(e) => setModalAuthor(e.target.value)}
                        type="text"
                        required
                      />

                      <label htmlFor="genre">Genre</label>
                      <select
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select a genre
                        </option>
                        <option value="Fiction">Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Biography">Biography</option>
                        <option value="Self-Help">Self-Help</option>
                        <option value="History">History</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Other">Other</option>
                      </select>

                      <label>Registered in:</label>
                      <input
                        value={formatDate(book.register)}
                        type="text"
                        disabled
                      />

                      <label htmlFor="year"> Published in </label>
                      <input
                        value={modalYear.toISOString().split('T')[0]}
                        onChange={(e) => setModalYear(new Date(e.target.value))}
                        type="date"
                        required
                      />

                      <label htmlFor="description">Description</label>
                      <input
                        id="description"
                        value={modalDescription}
                        onChange={(e) => setModalDescription(e.target.value)}
                        type="text"
                        placeholder="description"
                        required
                      />
                      <ButtonStyled onClick={() => saveUpdate()} id="update2">
                        Update
                      </ButtonStyled>
                      <ButtonStyled
                        onClick={() => setModalIsOpen(false)}
                        id="cancel2"
                      >
                        Cancel
                      </ButtonStyled>
                    </form>
                  </Modal>
                </div>
              </CardBook>
            ))}
          </div>
        )}
      </section>
    </FormStyled>
  );
}
