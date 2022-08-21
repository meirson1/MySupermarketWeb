import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { client } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!client) {
      navigate("/login");
    }
  }, [client, navigate, dispatch]);
  return (
    <>
      <section className="heading">
        <h1>Welcome {client && client.name}</h1>
      </section>
    </>
  );
}

export default HomePage;
