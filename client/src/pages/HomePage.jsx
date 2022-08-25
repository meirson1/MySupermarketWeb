import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import MapsPage from "./Maps";
import Weather from "../components/weather";
import Video from "../components/Video";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { client } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!client) {
      navigate("/login");
    } else {
      toast.dismiss();
    }
  }, [client, navigate, dispatch]);

  return (
    <>
      <section className="heading">
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "right",
          }}
        >
          <h1>Welcome {client && client.name}</h1>
        </div>
      </section>
      <br />
      <Video embedId="LC_qM1P6nG4" />
      <br />
      <div style={{ display: "flex", flexdirection: "row" }}>
        <MapsPage />
        <Weather />
      </div>
    </>
  );
}

export default HomePage;
