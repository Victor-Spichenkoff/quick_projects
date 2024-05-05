import express from 'express'
import cors from 'cors'

import router from './config/routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(router)


app.listen("2006", () => console.log("Rodando na porta 2006"))