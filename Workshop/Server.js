const express = require('express')

const app = express()


const middleware=(req,res,next)=>{
    next()
}

app.use(middleware)

app.get('/Test',(req,res)=>{

    res.send('Hello')
})

app.get('/Balise',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html') 
})

app.get('/Home',(req,res)=>{

    res.sendFile(__dirname+'/public/')
})

app.get('/style.css',(req,res)=>{
  
 res.sendFile(__dirname+'/public/style.css') 

})

app.use(express.static('public'))

const port = 5000

app.listen(port,()=>{console.log( `Serveur is running on the port ${port}`)})
