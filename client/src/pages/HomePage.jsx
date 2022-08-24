import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import MapsPage from "./Maps";
import Weather from "../components/weather";

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
        <h1>Welcome {client && client.name}</h1>
      </section>
      <MapsPage>Shops Map</MapsPage>
      <Weather />
    </>
  );
}

export default HomePage;
