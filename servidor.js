const express = require('express');

const app = express()

const Contenedor = require('./archivo.js')
let testeo = new Contenedor ('./productos.txt')

app.get('/productos',(req,res)=>{
    res.json(testeo.getAll())
})

app.get('/productosrandom',(req,res)=>{
    res.json(testeo.getByRandomId())
})


const PORT = 8080
app.listen(8080)
console.log(`Servidor Http escuchando en el puerto ${PORT}`)