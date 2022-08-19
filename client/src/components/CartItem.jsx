import "../styles/CartItem.css"
import {Link} from 'react-router-dom'
const CartItem = () => {
  return <div className="cartitem">
      <div className="cartitem__image">
          <img src="https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_075f3bee-baf9-4309-87a6-7f8331c01a00.jpg" alt="product name"/>
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
          <p>Avocado</p> 
        </Link>
        <p className="cartitem__price">$2.00</p>
        <select className="cartitem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button className="cartitem__deleteBtn">
          <i className="fas fa-trash"></i>  
        </button>
    </div>
}
export default CartItem