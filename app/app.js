import express from 'express'
import { router } from './routes/router.js'
import cors from 'cors';

const app = express()
const PORT = 4000 

app.use(express.json())
app.use(cors())

//use router

app.use('/', router)


app.listen(PORT, (_, res) => {
    console.log(`Server is running on port ${PORT}`)
})