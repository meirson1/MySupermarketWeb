import { useEffect, useState } from "react";
import c3 from "c3";
import axios from "axios";


export const TopProductsChart = () => {

  const API_URL = "http://localhost:8080/api/carts/TopProducts";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    c3.generate({
      bindto: "#chartProducts",
      data: {
        columns: data.map(item => [item._id, item.count]),
        type: "bar",
      },
    });
  }, [data[0]]);

  return <div id="chartProducts">
    </div>;
    
};
