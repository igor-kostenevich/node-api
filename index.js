import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router.js'
import todoRouter from './todoRouter.js'
const PORT = 5001
const DB_URL = `mongodb+srv://Igor:password123321@cluster0.tib9cqk.mongodb.net/?retryWrites=true&w=majority`

const app = express()
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//   res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
//   next()
// })
app.use(cors())

app.use(express.json())
app.use('/api', router)
app.use('/api', todoRouter)

// app.use('/api', userRouter) // If have another routes





async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log("SERVER START qwe: " + PORT))
  } catch (error) {
    console.log(error);
  }
}
startApp()
