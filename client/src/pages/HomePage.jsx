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
import Product from "../components/Product";

const HomePage = () => {
  return <div className="homepage">
      <div className="homepage__products">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
      </div>
 </div>
}

export default HomePage;
