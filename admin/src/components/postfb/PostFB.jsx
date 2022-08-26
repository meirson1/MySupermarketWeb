import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./postfb.css";

const PostOnFB = () =>{
  const [data, setData] = useState(null);

  function getData(val) {
    setData(val.target.value);
  }

  const Post = () => {
    axios
      .post("https://graph.facebook.com/109443241883186/feed?", {
        message: data,
        access_token:
          "EAAGXCeNMPyMBAD0QSLz0gDZBBgrBOIOJ9usZA2PtVQ14rCuTiEWUtoYk2TOmH6YE7TxjaUGuAtx7nlB9a7MZBCM1YdwXWIXkSp0rYtSGpIJAymmYjjO3WyBA24vs3wyr3JCYRzLkuvfoOT8akRrvDmmheougosZAzDbz87H8AEnBDM32F41JZBGdl6JroYvLi3xFDav8wxgZDZD",
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