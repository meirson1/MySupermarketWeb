import { useEffect, useState } from "react";
import c3 from "c3";
import axios from "axios";

export const PieProductsChart = () => {

  const API_URL = "http://localhost:8080/api/carts/DepartmentsPie";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    c3.generate({
      bindto: "#pieProducts",
      data: {
        columns: data.map(item => [item._id, item.sum]),
        type: "pie",
      },
    });
  }, [data[0]]);
  
  return <div id="pieProducts" />;
};
