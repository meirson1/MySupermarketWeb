import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/clients/admin";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setData(data.data));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const rows = useMemo(
    () => data.map((row, index) => ({ ...row, id: row._id })),
    [data]
  );

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[data.length]}
      />
    </div>
  );
}
