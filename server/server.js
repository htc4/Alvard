// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');

// const app = express();
// const port = process.env.PORT || 3000;

// // PostgreSQL connection configuration
// const pool = new Pool({
//     user: 'wine',
//     host: 'localhost',
//     database: 'wine_shop',
//     password: '123',
//     port: 5432,
// });

// app.use(bodyParser.json());

// // Handle login POST request
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const client = await pool.connect();

//         const query = {
//             text: 'SELECT * FROM "user" WHERE email = $1 AND password = $2',
//             values: [email, password],
//         };

//         const result = await client.query(query);

//         client.release();

//         if (result.rows.length > 0) {
//             res.json({ success: true, message: 'Login successful' });
//         } else {
//             res.status(401).json({ success: false, message: 'Invalid email or password' });
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ success: false, message: 'An error occurred during login' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
