import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from "path";

/*const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')*/

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Rutas del back

app.get('/', (req, res)=>{
    res.send("Hola mundo")
})

// Middleware para Vue router mode history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

app.set('puerto', process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=> {
    console.log('Ejemplo del servidor Puerto: '+app.get('puerto'))
})
