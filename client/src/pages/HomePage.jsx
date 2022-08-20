import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:8080/db").then((res) => setClients(res.data));
  }, [clients]);

  return (
    <div>
      <h1>HomePage</h1>
      {clients.map((client) => {
        return <p key={client.id}>{client.name}</p>;
      })}
    </div>
  );
}
