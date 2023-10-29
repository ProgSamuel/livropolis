import { useState } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Modal from 'react-modal';
import Book from '../assets/model/Book';
import { FormStyled } from '../assets/components/form';
import { CardBook } from '../assets/components/cardBook';

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
  const [modalYear, setModalYear] = useState(new Date())
  const [modalDescription, setModalDescription] = useState('');
  const [modalId, setModalId] = useState(0);
  const [modalRegister, setModalRegister] = useState(new Date())


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

  function formatDate(date: Date) {
    return format(date, 'dd MMMM yyyy', { locale: enUS });
  }

  function resetBook(){
    setTitle('')
    setAuthor('')
    setGenre('')
    setyear(new Date())
    setDescription('')
  }

  function deleteBook(id:number) {
    const certaint = confirm('Are you sure you want to delete this book?')
    if(certaint){
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks([...updatedBooks]);
      setModalIsOpenView(false)
    }
  }


  const [modalIsOpen, setModalIsOpen] = useState(false);
  function upBook(book: Book){
  setModalIsOpen(true)

  setModalId(book.id)
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
      genre:modalGenre,
      register: modalRegister,
      year:modalYear,
      description:modalDescription
    };
  
    const updatedBooks = books.map((book) => (book.id === updatedBook.id ? updatedBook : book));
  setBooks(updatedBooks);
  
    setModalIsOpen(false);
    setModalIsOpenView(false)

  }

  const [modalIsOpenView, setModalIsOpenView] = useState(false);
  
  const today = new Date().toISOString().split('T')[0];


  return (
    <FormStyled>
      
      <form action="register">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book's name" required />

        <label htmlFor="author">Author</label>
        <input id="author"value={author}onChange={(e) => setAuthor(e.target.value)}type="text"placeholder="Author" required/>

        <label htmlFor="genre">Genre</label>
        <input id="genre"value={genre}onChange={(e) => setGenre(e.target.value)}type="text"placeholder="Book genre" required/>

        <label>Registered in:</label>
        <input value={formatDate(new Date())} type="text" disabled />

        <label htmlFor="year">  Published in </label>
        <input value={year.toISOString().split('T')[0]}onChange={(e) => setyear(new Date(e.target.value))}type="date" max={today} required/>

        <label htmlFor="description">Description</label>
        <input id="description"value={description}onChange={(e) => setDescription(e.target.value)}type="text"placeholder="description" required/>

        <input type="submit" onClick={newBook} />
        <input type="reset" onClick={resetBook} />
      </form>

      <div>
        
        {books.map((book) => (
          <CardBook key={book.id}>
            <ul>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li>{formatDate(book.year)}</li>
              <button onClick={() => setModalIsOpenView(true)}> See more </button>          
            </ul>

            <div className='view'>
              <Modal isOpen={modalIsOpenView}onRequestClose={() => setModalIsOpen(false)} contentLabel="See more">
              <ul>
                <li>{book.title}</li>
                <li>{book.author}</li>
                <li>{formatDate(book.year)}</li>
                <li>{book.genre}</li>
                <li>{formatDate(book.register)}</li>
                <li>{book.description}</li>
              </ul>
              <button onClick={() => upBook(book)}>Update</button>
              <button onClick={() => deleteBook(book.id)}> Delete </button>
              <button onClick={() => setModalIsOpenView(false)}>Cancel</button>

              </Modal>
            </div>

            <div className='Edit'>
            <Modal isOpen={modalIsOpen}onRequestClose={() => setModalIsOpen(false)} contentLabel="Exemplo de Modal">
              <form action="update">
                <label htmlFor="title"> Title </label>
                <input type="text" id="title" value={modalTitle} onChange={(e) => setModalTitle(e.target.value)} required />

                <label htmlFor="author">Author</label>
                <input id="author"value={modalAuthor}onChange={(e) => setModalAuthor(e.target.value)}type="text" required/>

                <label htmlFor="genre">Genre</label>
                <input id="genre"value={modalGenre}onChange={(e) => setModalGenre(e.target.value)}type="text" required/>

                <label>Registered in:</label>
                <input value={formatDate(book.register)} type="text" disabled />

                <label htmlFor="year">  Published in </label>
                <input value={modalYear.toISOString().split('T')[0]}onChange={(e) => setModalYear(new Date(e.target.value))}type="date" required/>

                <label htmlFor="description">Description</label>
                <input id="description"value={modalDescription}onChange={(e) => setModalDescription(e.target.value)}type="text"placeholder="description" required/>

              </form>
              <button onClick={() =>saveUpdate() }>Update</button>
              <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            </Modal>
            </div>
          </CardBook>
        ))}
      </div>

    </FormStyled>
  );
}
