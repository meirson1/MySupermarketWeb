import "../styles/ProductPage.css"
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getProductDetails } from "../redux/actions/productActions"
import { addToCart } from "../redux/actions/cartActions";

const ProductPage = ({match, history}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails =  useSelector((state) => state.getProductDetails);
  const {loading, error, product} = productDetails;
  const { id } = useParams();
  useEffect(() => {
    if(product && id !== product._id){
      dispatch(getProductDetails(id));
    }
  },[dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productpage">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
      <>
      <div className="productpage__left">
      <div className="left__image">
        <img src={product.imageUrl} alt={product.name}/>
      </div>
      <div className="left__info">
        <p className="left__name">{product.name}</p>
        <p>Price: ${product.price} </p>
        <p>Description: {product.description}</p>
      </div>
      </div>
      <div className="productpage__right">
        <div className="right__info"/>
        <p>Price: <span>${product.price}</span></p>
        <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(20).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
        <p>
        <button type="button" onClick={addToCartHandler}>
        <Link to={`/cart`} className="info__button">
        Add To Cart
        </Link>
          </button>
        </p>
      </div>
      </>
      )}
    </div>
  );
}

export default ProductPage