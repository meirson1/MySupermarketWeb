import "../styles/Product.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="product">
    <img  src="https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_075f3bee-baf9-4309-87a6-7f8331c01a00.jpg" 
    alt="product name"/>
    <div className="product__info">
        <p className="info__name">Avocado</p>
        <p className="info__description">
        Avocado ready for eat (each)
        </p>
        <p className="info__rating">
        3 stars
        </p>
        <p className="info__price">$2.00</p>
        <Link to={`/product/${1111}`} className="info__button">
            Add To Cart
        </Link>
    </div>  
    </div>
  );
};
export default Product;