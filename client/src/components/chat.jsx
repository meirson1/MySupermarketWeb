import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import io from "socket.io-client";
import "../styles/chat.css";

export default function Chat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:8081");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3 className="chat__h3">
          {name}: <span className="chat__span">{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        flexdirection: "row",
        justifycontent: "center",
        margin: "5rem",
      }}
    >
      <form className="chat__form" onSubmit={onMessageSubmit}>
        <h2>Messenger</h2>
        <div className="chat__name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>

        <button className="chat__button">Send Message</button>
      </form>
      <div className="chat__render">
        <h3 style={{ textDecoration: "underline", fontWeight: "550" }}>
          Chat Log
        </h3>
        <br />
        {renderChat()}
      </div>
    </div>
  );
}
