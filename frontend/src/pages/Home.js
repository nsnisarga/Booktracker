import React from 'react';
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:1000/api/v1/getBooks`);
      if (response.data && response.data.books && response.data.books.length > 0) {
        navigate('/books');
      } else {
        alert('No books found.');
      }
    } catch (err) {
      console.error('Search error:', err.response ? err.response.data : err.message);
      alert(`Failed to search books. ${err.response ? err.response.data.message : err.message}`);
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
            />
            <button type="submit" className="btn btn-success ms-2">Search</button>
          </form>
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
