import "./newProduct.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function NewProduct() {
  const [newName, setNewName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/products/admin/create";

  const onSubmit = (e) => {
    if (
      newName === "" ||
      newDepartment === "" ||
      newDescription === "" ||
      newPrice === "" ||
      newRating === "" ||
      newImageUrl === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      axios
        .post(API_URL, {
          name: newName,
          department: newDepartment,
          description: newDescription,
          price: newPrice,
          rating: newRating,
          imageUrl: newImageUrl,
        })
        .then((res) => console.log(res.data));

      setNewName("");
      setNewDepartment("");
      setNewDescription("");
      setNewPrice("");
      setNewRating("");
      setNewImageUrl("");
      navigate("/products");
    }
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form onSubmit={onSubmit} className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={newName}
            placeholder="Apple"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Department</label>
          <input
            name="desc"
            type="text"
            value={newDepartment}
            placeholder="department..."
            onChange={(e) => setNewDepartment(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            value={newDescription}
            placeholder="description..."
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={newPrice}
            placeholder="100$"
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={newRating}
            placeholder="1-5"
            onChange={(e) => setNewRating(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input
            name="imageUrl"
            type="text"
            value={newImageUrl}
            placeholder="http://photos.com/imageOrange"
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
