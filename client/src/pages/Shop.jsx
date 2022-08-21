import "../styles/HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Product from "../components/Product";
// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

export default function Shop() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="homepage__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              rating={product.rating}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}