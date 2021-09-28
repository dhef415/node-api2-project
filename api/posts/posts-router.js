const router = require('express').Router()
const Posts = require('./posts-model')

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({
            message: 'The posts information could not be retrieved',
            err: err.message,
            stack: err.stack,
        })
    }
})

module.exports = router
