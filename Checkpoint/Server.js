const express = require("express")

const app = express()

const port = 5000

const verifDate=(req,res,next)=>{
    var currentDate = new Date()

    var currentHour = currentDate.getHours()

    var currentDay = currentDate.getDay()

    if(currentDay == 6 || currentDay == 0 || currentHour > 17 || currentHour < 9){
        return res.send("We are Clawzed")
    }

    next()
}

app.use(verifDate)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/HomePage.html")
})

app.get("/Services",(req,res)=>{
    res.sendFile(__dirname+"/public/OurServices.html")
})

app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname+"/public/ContactUs.html")
})


app.listen(port,console.log(`Server is running on the port ${port}`))
