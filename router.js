import Router from 'express'
import Post from './post.js'

const router = new Router()

router.post('/posts', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find()
    return res.json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    if(!id) res.status(400).json('Id not found')
    const post = await Post.findById(id)
    return res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/posts', async (req, res) => {
  try {
    const post = req.body
    if(!post._id) res.status(400).json('Id not found')
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    return res.json(updatedPost)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    if(!id) res.status(400).json('Id not found')
    const post = await Post.findByIdAndDelete(id)
    return res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router;