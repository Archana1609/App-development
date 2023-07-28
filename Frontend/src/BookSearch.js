import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css'; // Import the CSS file

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="book-search-container">
      <input
        className="book-search-input"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={handleChange}
      />
      <button className="book-search-button" onClick={handleSearch}>
        Search
      </button>
      <div>
        {books.map((book) => (
          <div key={book.id} className="book-result">
            <h2 className="book-title">{book.volumeInfo.title}</h2>
            <p className="book-author">
              {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
            </p>
            <p className="book-description">{book.volumeInfo.description}</p>
            <img
              className="book-image"
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                'https://via.placeholder.com/150'
              }
              alt={book.volumeInfo.title}
            />
            <div className="book-buttons">
              <Link to="/pay"><button className="buy-now-button">Buy Now</button></Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
