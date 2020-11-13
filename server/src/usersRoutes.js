// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs'); //For hashing passwords

// module.exports = (DB) => {
//     const express = require("express");
//     const router = express.Router();

//   // We run through all users and hash their password. 
// // Ideally, this should happen only in POST /api/users/ when signing up a new user,
// // or in PUT /api/users/ when changing the password.

// users.forEach(async user =>{
//     const hashedPassword = await new Promise((resolve, reject)=>
//     {bcrypt.hash(user.password, 10, function(err,hash){
//         if (err) reject(err); else resolve(hash);
//     });
// });
// user.hash=hashedPassword; //Storing hash + salt on user object
// delete user.password;//Clear the text password
// console.log(`Hash generated for ${user.username}:`, user); // Logging for debugging purposes
// });

// //Create routes and export the router

// module.exports = secret => {
//     router.post('/', (req, res) => {
//         // TODO: Implement user account creation
//         res.status(501).json({ msg: "create new user not implemented" });
//       });
    
//       router.put('/', (req, res) => {
//         // TODO: Implement user update (change password, etc).
//         res.status(501).json({ msg: "update user not implemented" });
//       });
    
//       // This route takes a username and a password and creates an auth token
//       router.post('/authenticate', (req, res) => {
//         const username = req.body.username;
//         const password = req.body.password;
    
//         if (!username || !password) {
//           let msg = "Username or password missing!";
//           console.error(msg);
//           res.status(401).json({ msg: msg });
//           return;
//         }
    
//         const user = users.find((user) => user.username === username);
//         if (user) { // If the user is found
//           if (bcrypt.compareSync(password, user.hash)) {
//             const payload = { username: username };
//             const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    
//             res.json({
//               msg: `User '${username}' authenticated successfully`,
//               token: token
//             });
//           } else {
//             res.status(401).json({ msg: "Password mismatch!" })
//           }
//         } else {
//           res.status(404).json({ msg: "User not found!" });
//         }
//       });
    
//       return router;

//     };
// }
