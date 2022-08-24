import "./newUser.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function NewUser() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/clients";

  const onSubmit = (e) => {
    if (
      newName === "" ||
      newEmail === "" ||
      newPassword === "" ||
      newPasswordConfirm === ""
    ) {
      toast.error("Please fill all the fields");
    } else if (newPassword !== newPasswordConfirm) {
      toast.error("Passwords do not match");
    } else {
      axios
        .post(API_URL, {
          name: newName,
          email: newEmail,
          password: newPassword,
        })
        .then((res) => console.log(res.data));

      setNewName("");
      setNewEmail("");
      setNewPassword("");
      setNewPasswordConfirm("");
      navigate("/users");
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form onSubmit={onSubmit} className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            placeholder="John Smith"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label>Password Confirm</label>
          <input
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            type="password"
            placeholder="password confirm"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <button type="submit" className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
}
