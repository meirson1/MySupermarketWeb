import "./product.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const API_URL = `http://localhost:8080/api/products/${productId}`;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setProduct(data.data));
  }, [product]);

  const [newName, setNewName] = useState("");
  const [newDep, setNewDep] = useState("");
  const [newDes, setNewDes] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRating, setNewRating] = useState("");

  const updateUser = async (id) => {
    await axios.put(`http://localhost:8080/api/products/admin/update/${id}`, {
      id: id,
      newName: newName,
      newDep: newDep,
      newDes: newDes,
      newPrice: newPrice,
      newRating: newRating,
    });
    navigate("/products");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft"></div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.imageUrl} alt="" className="productInfoImg" />
            <span className="productName">{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:__</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              onChange={(e) => setNewName(e.target.value)}
              type="text"
              placeholder={product.name}
            />
            <label>Product Department</label>
            <input
              onChange={(e) => setNewDep(e.target.value)}
              type="text"
              placeholder={product.department}
            />
            <label>Product Description</label>
            <input
              onChange={(e) => setNewDes(e.target.value)}
              type="text"
              placeholder={product.description}
            />
            <label>Price</label>
            <input
              onChange={(e) => setNewPrice(e.target.value)}
              type="text"
              placeholder={product.price}
            />
            <label>Rating</label>
            <input
              onChange={(e) => setNewRating(e.target.value)}
              type="text"
              placeholder={product.rating}
            />
          </div>
          <div className="productFormRight">
            <button
              onClick={() => updateUser(product._id)}
              className="productButton"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
