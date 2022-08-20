import axios from "axios";

const API_URL = "/api/clients/";

// Register client
const register = async (clientData) => {
  const response = await axios.post(API_URL, clientData);

  if (response.data) {
    localStorage.setItem("client", JSON.stringify(response.data));
  }

  return response.data;
};

// Login client
const login = async (clientData) => {
  const response = await axios.post(API_URL + "login", clientData);

  if (response.data) {
    localStorage.setItem("client", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("client");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
