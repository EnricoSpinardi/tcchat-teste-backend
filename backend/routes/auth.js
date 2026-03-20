const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/login", (req, res) => {
    const{email} = req.body
});

const sql = "SELECT * FROM Usuarios WHERE email = ?";

res.json(results[0]);

module.exports = router;