import express from 'express'
import { router } from './routes/router.js'

const app = express()
const PORT = 4000 

app.use(express.json())

//use router

app.use('/', router)


app.listen(PORT, (_, res) => {
    console.log(`Server is running on port ${PORT}`)
})