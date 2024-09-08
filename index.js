const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Tạo ứng dụng Express
const app = express();  

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "moho"
})

// Khởi động server
app.listen(3001, () => {
    console.log("Listening on port 3001...");
})
