import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
} from "@mui/icons-material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

export default function User() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const API_URL = `http://localhost:8080/api/clients/admin/${userId}`;
  const [client, setClient] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setClient(data.data));
  }, [client]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const updateUser = async (id) => {
    await axios.put(`http://localhost:8080/api/clients/admin/update/${id}`, {
      newName: newName,
      newEmail: newEmail,
    });
    navigate("/users");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">{client.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{client.email}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{client.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{client.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form typeof="PUT" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder={client.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder={client.name}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                onClick={() => {
                  updateUser(client._id);
                }}
                className="userUpdateButton"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
