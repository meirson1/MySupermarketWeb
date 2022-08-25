import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./postfb.css";

const PostOnFB = () =>{
  const [data, setData] = useState("");

  function getData(val) {
    setData(val.target.value);
  }

  const Post = () => {
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
    <div className="page">
      <br />
      <div className="p_text">
        This is your place to post specials and updates !!
      </div>
      <br />
      <br />
      <input type="text" className="text_box" onChange={getData} />
      <br />
      <br />
      <br />
      <button onClick={() => Post()} className="post_button">Post Status</button>
    </div>
  );
}

render(<PostOnFB />, document.querySelector("#root"));

export default PostOnFB;