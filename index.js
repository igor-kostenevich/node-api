import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5001
const DB_URL = `mongodb+srv://Igor:password123321@cluster0.tib9cqk.mongodb.net/?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use('/api', router)
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
