import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./postfb.css";

function ReactFBPageRandomQuote() {
  const [data, setData] = useState("");

  function getData(val) {
    setData(val.target.value);
  }

  const postRandomQuote = () => {
    axios
      .post("https://graph.facebook.com/109443241883186/feed?", {
        message: data,
        access_token:
          "EAAGXCeNMPyMBAIlP9aMxFgfgQDmZB0eeEkjWdZAZBUTqVR5jq9wZC184kdrkOKLAZB0PoH3YCZC6N8SZCPVha2fWreqAE7YZCoCS7fjdLavZBCaJQG5giuhgWK4d5RRuHSusGO2MLsAZC93kWjRB26F9XRcR0Vov7DaSyPHAnR8AMyx0XtmJXJhx2i",
      })
      .then(
        (res) => {
          const result = res.data;
          console.log(result);
          alert("Success!");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <br />
      <h1 className="text-fw-bold mb-4">
        This is your place to post specials and updates !!
      </h1>
      <br />
      <br />
      <input type="text" onChange={getData} />
      <br />
      <br />
      <br />
      <button onClick={() => postRandomQuote()}>Post Status</button>
    </div>
  );
}

render(<ReactFBPageRandomQuote />, document.querySelector("#root"));

export default ReactFBPageRandomQuote;
