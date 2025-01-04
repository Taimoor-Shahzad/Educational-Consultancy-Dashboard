// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// // Verify JWT Token Middleware
// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(403).json({ error: 'Access denied' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified; // Attach the user to the request object
//     next();
//   } catch (err) {
//     res.status(400).json({ error: 'Invalid token' });
//   }
// };

// // Role-Based Access Control Middleware
// const verifyRole = (roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ error: 'Access denied: insufficient permissions' });
//     }
//     next();
//   };
// };

// // Example Login Route (if needed here)
// router.post('/login', async (req, res) => {
//   // Login logic here...
// });

// module.exports = { router, verifyToken, verifyRole };
