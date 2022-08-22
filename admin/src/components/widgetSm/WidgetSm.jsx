import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8080/api/clients/admin";

export default function WidgetSm() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setClients(data.data));
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Clients</span>
      <ul className="widgetSmList">
        {clients.map((client) => {
          return (
            <li key={client._id} className="widgetSmListItem">
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{client.name}</span>
              </div>
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{client.email}</span>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                to={`user/${client._id}`}
              >
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
