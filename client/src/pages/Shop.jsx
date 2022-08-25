import "../styles/Shop.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
// Components
import Product from "../components/Product";
// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

export default function Shop() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState({
    value: "all",
    label: "All Depertments",
  });
  useEffect(() => {
    dispatch(listProducts(query, selected.value));
  }, [dispatch]);

  const searchQuery = (q, d) => {
    dispatch(listProducts(q, d));
  };

  const clearQuery = () => {
    dispatch(listProducts("", "all"));
  };

  const handleChange = (searchEvent) => {
    setQuery(searchEvent.target.value);
    searchQuery(searchEvent.target.value, selected.value);
  };

  const handleClick = async () => {
    setQuery("");
    clearQuery();
  };

  const options = [
    { value: "fruit", label: "Fruit" },
    { value: "vegetable", label: "Vegetable" },
    { value: "grocery", label: "Grocery" },
    { value: "dairy", label: "Dairy" },
    { value: "meat", label: "Meat" },
    { value: "wine&beer", label: "Wine & Beer" },
    { value: "bakery", label: "Bakery" },
    { value: "all", label: "All Depertments" },
  ].sort((a, b) => a.value.localeCompare(b.value));

  return (
    <div className="homepage">
      <div>
        <ul>
          <input
            className="homepage__search"
            placeholder=" Search By Name..."
            onChange={handleChange}
            value={query}
          />
          <button
            defaultValue
            className="homepage__clearbutton"
            disabled={query.length === 0 && selected.value === "all"}
            onClick={() => {
              setSelected({ value: "all", label: "All Depertments" });
              handleClick();
            }}
          >
            Clear
          </button>
          <div>
            <Select
              className="homepage__select"
              value={selected}
              options={options}
              onChange={setSelected}
            >
              <option>Select</option>
              {options &&
                options.map((d, index) => {
                  return <option key={index}>{d.value}</option>;
                })}
            </Select>
          </div>
        </ul>
      </div>
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
