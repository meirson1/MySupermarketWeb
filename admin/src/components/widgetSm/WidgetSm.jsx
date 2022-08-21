import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/clients/admin";

export default function WidgetSm() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, [clients]);

  console.log(clients);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Clients</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Client</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
