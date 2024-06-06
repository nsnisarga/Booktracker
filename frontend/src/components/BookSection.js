import React, { useState } from 'react';
import axios from 'axios';

const BookSection = ({ data, fetchData }) => {
  const [updateData, setUpdateData] = useState({
    bookname: '',
    description: '',
    author: '',
    image: '',
    price: '',
  });

  const [editId, setEditId] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      fetchData(); // Fetch data again after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:1000/api/v1/updateBook/${id}`, updateData);
      fetchData(); // Fetch data again after update
      setEditId(null); // Reset editId to hide the form
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-between align-items-center container-fluid flex-wrap">
      {data && data.map((item) => (
        <div key={item._id} className="m-3" style={{ width: "200px", height: "350px", border: "1px solid white", borderRadius: "20px" }}>
          <div>
            <img
              style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
              className="img-fluid"
              src={item.image}
              alt={item.bookname}
            />
          </div>
          <h6 style={{ fontSize: "15px" }} className="px-2 my-1 text-white">{item.bookname.slice(0, 20)}</h6>
          <h3 style={{ fontSize: "30px", color: "red" }} className="mb-3 px-2">Rs.{item.price}</h3>
          <div className="d-flex justify-content-around align-items-center">
            <button className="btn btn-primary" onClick={() => setEditId(item._id)}>UPDATE</button>
            <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>DELETE</button>
          </div>
          {/* Update form */}
          {editId === item._id && (
            <form className="mt-3">
              <input type="text" name="bookname" placeholder="Book Name" value={updateData.bookname} onChange={handleChange} />
              <input type="text" name="description" placeholder="Description" value={updateData.description} onChange={handleChange} />
              <input type="text" name="author" placeholder="Author" value={updateData.author} onChange={handleChange} />
              <input type="text" name="image" placeholder="Image URL" value={updateData.image} onChange={handleChange} />
              <input type="text" name="price" placeholder="Price" value={updateData.price} onChange={handleChange} />
              <button className="btn btn-primary" onClick={() => handleUpdate(item._id)}>Save</button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookSection;
