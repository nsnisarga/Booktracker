// src/components/AddBook.js
import React, { useState } from 'react';
import axios from "axios";

const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value
    });
  };
  const [notification, setNotification] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/api/v1/add", Data);
      console.log(res);
      setNotification({ type: 'success', message: 'Book Added Successfully' });
    } catch (err) {
      console.error(err);
      setNotification({ type: 'error', message: 'Failed to Add Book' });
    }
  };


  console.log(Data);

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "91.5vh" }}>
      <div className="container p-4">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="bookname" className="form-label text-white">
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              id="bookname"
              placeholder="Enter Book Name"
              name="bookname"
              value={Data.bookname}
              onChange={change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label text-white">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Enter The Name Of Author"
              name="author"
              value={Data.author}
              onChange={change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label text-white">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description of The Book"
              name="description"
              value={Data.description}
              onChange={change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label text-white">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter The URL Of The Image"
              name="image"
              value={Data.image}
              onChange={change}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label text-white">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter The Price"
              name="price"
              value={Data.price}
              onChange={change}
            />
          </div>
          {notification && (
        <div className={`alert alert-${notification.type === 'success' ? 'success' : 'danger'}`}>
          {notification.message}
        </div>
      )}
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>


    </div>
  );
};

export default AddBooks;
