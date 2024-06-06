import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1000/api/v1/searchBooks', {
        query: searchTerm
      });
      if (response.data && response.data.books && response.data.books.length > 0) {
        setSearchResults(response.data.books);
        setErrorMessage('');
      } else {
        setSearchResults([]);
        setErrorMessage('No books found.');
      }
    } catch (err) {
      console.error('Search error:', err.response ? err.response.data : err.message);
      setSearchResults([]);
      setErrorMessage(`Failed to search books. ${err.response ? err.response.data.message : err.message}`);
    }
  };

  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column px-0" style={{ height: "91.5vh" }}>
          <h1 className="text-center mb-4">BOOK STORE FOR YOU</h1>
          <p className="mb-0 text-center" style={{ color: "silver" }}>
            Checkout The Books From Here.
          </p>
          <form className="d-flex my-3" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Books" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-success ms-2">Search</button>
          </form>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((book, index) => (
                <div key={index} className="search-result my-3">
                  <h2>{book.bookname}</h2>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p>{book.description}</p>
                </div>
              ))}
            </div>
          )}
          <Link to="/books" className="viewBook my-3 text-center">View Books</Link>
        </div>
        <div className="col-lg-6 px-0" style={{ height: "91.5vh", overflow: "hidden" }}>
          <img 
            className="img-fluid" 
            src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?cs=srgb&dl=pexels-pixabay-256455.jpg&fm=jpg" 
            alt="Book Store" 
            style={{ objectFit: "cover", width: "100%", height: "100%" }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
