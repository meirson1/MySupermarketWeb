import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/products?search=&department=all";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((data) => setData(data.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/products/admin/delete/${id}`);
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.imageUrl} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "department",
      headerName: "Department",
      width: 160,
    },
    {
      field: "description",
      headerName: "Description",
      width: 340,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
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
    <div className="productList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[data.length]}
      />
    </div>
  );
}
