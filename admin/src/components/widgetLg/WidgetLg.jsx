import "./widgetLg.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL_ORDERS = "http://localhost:8080/api/carts/admin/order";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL_ORDERS)
      .then((res) => setOrders(res.data.slice(0, res.data.length)));
  }, []);

  // const API_URL_CLIENTS = `http://localhost:8080/api/clients/admin/${userId}`;
  // const [client, setClient] = useState([]);

  // useEffect(() => {
  //   axios.get(API_URL_CLIENTS).then((data) => setClient(data.data));
  // }, []);

  // const [client, setClient] = useState([]);

  // const getName = (id) => {
  //   axios
  //     .get(`http://localhost:8080/api/clients/admin/${id}`)
  //     .then((res) => setClient(res.data.name));
  // };

  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type}>{type}</button>;
  // };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Order ID</th>
          <th className="widgetLgTh">Amount Of Products</th>
          <th className="widgetLgTh">Total price</th>
          <th className="widgetLgTh">Customer ID</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr key={order._id} className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{order._id}</span>
              </td>
              <td className="widgetLgDate">{order.products.length}</td>
              <td className="widgetLgAmount">${order.totalPrice}</td>
              <td className="widgetLgStatus">{order.userId}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

// {order.products.map((product) => {
//   return (
//     <td key={product.id} className="widgetLgDate">
//       {product.name}
//     </td>
//   );
// })}
