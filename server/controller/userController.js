const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const express = require("express");
const Client = require("../models/Client");

// @desc    Register new client
// @route   POST /api/Clients
// @access  Public
const registerClient = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if client exists
  const clientExists = await Client.findOne({ email });

  if (clientExists) {
    res.status(400);
    throw new Error("client already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create client
  const client = await Client.create({
    name,
    email,
    password: hashedPassword,
  });

  if (client) {
    res.status(201).json({
      _id: client.id,
      name: client.name,
      email: client.email,
      token: generateToken(client._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid client data");
  }
});

// @desc    Authenticate a client
// @route   POST /api/Clients/login
// @access  Public
const loginClient = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for client email
  const client = await Client.findOne({ email });

  if (client && (await bcrypt.compare(password, client.password))) {
    res.json({
      _id: client.id,
      name: client.name,
      email: client.email,
      token: generateToken(client._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get client data
// @route   GET /api/clients/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.client);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find({}).sort({ name: "asc" });
    if (clients) {
      res.status(200).send(clients);
      console.log(clients.length, "clients from DB");
    } else {
      res
        .status(404)
        .send({ code: 404, message: `There is an error with your clients` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      res.status(200).send(client);
    } else {
      console.info({ id }, "client does not exist");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const updateClientById = async (req, res) => {
  const newName = req.body.newName;
  const newEmail = req.body.newEmail;

  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      client.name = newName;
      client.email = newEmail;
      client.save();
      res.status(200).send("client updated successfully");
    } else {
      console.info({ id }, "client does not exist");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const removeClientById = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (client) {
      res.status(200).send(client);
    } else {
      console.info({ id }, "client does not exist");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  registerClient,
  loginClient,
  getMe,
  getAllClients,
  getClientById,
  updateClientById,
  removeClientById,
};
