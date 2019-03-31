const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signin 登入頁

router.get('/', checkNotLogin, function (req, res, next) {
  res.send('登入頁')
})

// POST /signin 用戶登入
router.post('/', checkNotLogin, function (req, res, next) {
  res.send('登入')
})

module.exports = router
