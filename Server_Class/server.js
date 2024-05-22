const express = require("express")
const route = require ("./routes")
const router = require('./expressRouter')
const customer = require('./customer')
const app = express() //server
const PORT = 3030


route(app)
 app.use(router)
app.use(express.json())
app.use("/customer", customer)

// app.use('/', (req, res)=>{
//     res.send('You are in the home DIR')
// })

app.all("*", (req, res)=>{
    res.status(404).send(JSON.stringify("Wahala! Wahalaa!!, Directory not found"))
})

app.listen(PORT,'localhost',()=>{
    console.log(`Server is running on ${PORT}`)
})


// app.post("/express", (req, res)=>{
//     const user ={
//         name: "Shabalala Deks",
//         age: "27",
//         stack: "food stack"
//     }
// })