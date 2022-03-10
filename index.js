import express from 'express';
import routes from './config/router.js'

const app = express()

app.use(express.json())
app.use(routes)


app.listen(3009, () => {
    console.log("back end on")
})
