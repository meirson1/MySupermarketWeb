// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// export default function HomePage() {
//   const [clients,setClients] = useState([]);
//   useEffect(()=>{
//     axios.post("http://localhost:8080/db").then(res=>setClients(res.data));
//   },[])
  
//   return <div>
//     <h1>HomePage</h1>
//     {clients.map(client=>{
//       <p key={client.id}>{client.name}</p>
//     })}
//   </div>;
// }

import "../styles/HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Product from "../components/Product";
// Actions
import {getProducts as listProducts, } from "../redux/actions/productActions"


const HomePage = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts; 

    useEffect(() =>{
        dispatch(listProducts());
    }, [dispatch]);

  return ( 
  <div className="homepage">
      <div className="homepage__products">
        {loading ? (<h2>Loading...</h2>
        ) : error ? (
        <h2>{error}</h2> 
        ) : products.map((product) => <Product 
            key={product._id}
            productId={product._id} 
            name={product.name}
            price={product.price}
            description={product.description}
            rating={product.rating}
            imageUrl={product.imageUrl}/>
        )}
      </div>
 </div>
  ); 
};

export default HomePage;
