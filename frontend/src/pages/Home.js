import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column px-0" style={{ height: "91.5vh" }}>
          <h1 className="text-center mb-4">BOOK STORE FOR YOU</h1>
          <p className="mb-0 text-center" style={{ color: "silver" }}>
            Checkout The Books From Here.
          </p>
          <Link to="/books" className="viewBook my-3 text-center">View Books</Link>
        </div>
        <div className="col-lg-6 px-0" style={{ height: "91.5vh", overflow: "hidden" }}>
          <img className="img-fluid" src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?cs=srgb&dl=pexels-pixabay-256455.jpg&fm=jpg" alt="/" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
