import React ,{useState} from 'react'

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit= (e) => {
    e.preventDefault();

    console.log("name: ",name);
    console.log("email: ",email);
    console.log("password: ",password);

    if (name === "" || email === "" || password === "") return alert("Please fill in all fields");
    

    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-toggle="modal"
      data-bs-target="#addClientModal"
    >
      <div className="d-flex align-items-center">
        <div>Login</div>
      </div>
    </button>

    <div
      className="modal fade"
      id="addClientModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
    <div className="modal-body">
    <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="setPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
