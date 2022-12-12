import Router from 'express'
import Todo from './todo.js'

const router = new Router()

router.post('/todo', async (req, res) => {
  try {
    const {date, title, done} = req.body
    const todo = await Todo.create({date, title, done})
    res.json(todo)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/todo', async (req, res) => {
  try {
    const todo = await Todo.find()
    return res.json(todo)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/todo/:id', async (req, res) => {
  try {
    const {id} = req.params
    if(!id) res.status(400).json('Id not found')
    const todo = await Todo.findById(id)
    return res.json(todo)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/todo', async (req, res) => {
  try {
    const todo = req.body
    if(!todo._id) res.status(400).json('Id not found')
    const updatedPost = await Todo.findByIdAndUpdate(todo._id, todo, {new: true})
    return res.json(updatedPost)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/todo/:id', async (req, res) => {
  try {
    const {id} = req.params
    if(!id) res.status(400).json('Id not found')
    const todo = await Todo.findByIdAndDelete(id)
    return res.json(todo)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router;