const express = require("express")
const app = express()
const fs = require("fs")
const mongoose = require("mongoose")
const PORT = 3000

const uri = "mongodb://127.0.0.1:27017/test?directConnection=true"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
  console.error("Connection Error:", err.message);
  });





// middleware
app.use(express.urlencoded({ extended: false }))

// Define routes here

// app.get("/users", (req, res) => {
// const html = users.map(user => {
//   return `
//   <ul>
//     <li>${user.first_name}</li>
//     <li>${user.job_title}</li>
//   </ul>
//   `
// }).join("")
// res.send(html)
// })

// app.route("/api/users")
//   .get((req, res) => {
//     return res.json(users)
//   })
//   .post(async (req, res) => {
//     const body = req.body

//     if (!body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
//       return res.status(400).json({ msg: "All fields are required" })
//     }




// users.push({ "id": users.length + 1, ...body })
// fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//   if (err) {
//     console.log("Error is: ", err)
//   }
//   else {
//     return res.json({ status: "success", id: users.length })
//   }
// })
// })

// app.route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find(user => user.id == id)
//     return res.json(user)
//   })
//   .patch((req, res) => {
//     const id = Number(req.params.id)
//     const body = req.body
//     const index = users.findIndex(user => user.id == id)

//     if (index != -1) {
//       const updated_data = users.map((user, i) => {
//         if (index === i) {
//           for (const [key, value] of Object.entries(body)) {
//             user = {
//               ...user,
//               [key]: value
//             }
//           }
//           return user
//         } else {
//           return user
//         }
//       })
//       fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated_data), (err) => {
//         if (err) {
//           res.send("Error code is: ", err.code)
//         } else {
//           res.json({ statusbar: "success", updated_index: index })
//         }
//       }
//       )
//     }
//   })
//   .delete((req, res) => {
//     const id = Number(req.params.id)
//     const updated_users = users.filter(user => user.id != id)
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated_users), (err) => {
//       if (err) {
//         console.log("Error is: ", err)
//       }
//       else {
//         return res.json({ status: "success", id: updated_users.length })
//       }
//     })
//   })

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`))