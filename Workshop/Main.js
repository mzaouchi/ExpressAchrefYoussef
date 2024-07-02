const express = require('express')

const app = express()

const port = 5000

var users = [
    {name : "Youssef", age : 23, id : 1},
    {name : "Achref", age : 26, id :2},
    {name : "Mahmoud", age : 28, id : 3}
]

app.use(express.json())

app.get("/getUsers",(req,res)=>{
    res.send(users)
})

app.post("/addUser",(req,res)=>{
    users = [...users, req.body]
    res.send(users)
})

app.delete("/deleteUser/:id",(req,res)=>{
    const {id} = req.params

    users = users.filter((el,i,t)=> el.id != id)    

    res.send(users)
})

app.put("/updateUser/:id",(req,res)=>{
    const {id} = req.params

    users = users.map((el,i,t)=> el.id == id ? {...el,...req.body} : el)

    res.send(users)
})




app.listen(port,console.log(`Server is running on the port ${port}`))