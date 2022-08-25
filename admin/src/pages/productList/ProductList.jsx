import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

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

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState({
    value: "all",
    label: "All Depertments",
  });

  const searchQuery = (q, d) => {
    axios
      .get(`http://localhost:8080/api/products?search=${q}&department=${d}`)
      .then((data) => setData(data.data));
  };

  const clearQuery = () => {
    axios.get(API_URL).then((data) => setData(data.data));
  };

  const handleChange = (searchEvent) => {
    setQuery(searchEvent.target.value);
    searchQuery(searchEvent.target.value, selected.value);
  };

  const handleClick = async () => {
    setQuery("");
    clearQuery();
  };

  return (
    <>
      <div className="productList">
        <SearchIcon style={{ fontSize: "medium" }} />
        <input
          className="homepage__search"
          placeholder=" Search By Name..."
          onChange={handleChange}
          value={query}
        />
        <button
          defaultValue
          className="homepage__clearbutton"
          disabled={query.length === 0 && selected.value === "all"}
          onClick={() => {
            setSelected({ value: "all", label: "All Depertments" });
            handleClick();
          }}
        >
          Clear
        </button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[data.length]}
        />
      </div>
    </>
  );
}
