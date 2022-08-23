import { Link } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart";
// import { Publish } from "@mui/icons-material";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { userRequest } from "../../requestMethods";

export default function Product() {
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
  };

  // const location = useLocation();
  // const productId = location.pathname.split("/")[2];
  // const [pStats, setPStats] = useState([]);

  // const product = useSelector((state) =>
  //   state.product.products.find((product) => product._id === productId)
  // );

  // const MONTHS = useMemo(
  //   () => [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Agu",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = 0; //= await get("orders/income?pid=" + productId);
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id;
  //       });
  //       list.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
        </div>
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
            {/* <div className="productUpload">
              <img src={product.imageUrl} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div> */}
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
