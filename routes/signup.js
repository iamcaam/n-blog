const fs = require('fs')
const path = require('path')
const sha1 = require('sha1')
const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')
const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 註冊頁
router.get('/', checkNotLogin, function (req, res, next) {
  // res.send('注册页')
  res.render('signup')
})

// POST /signup 用戶註冊
router.post('/', checkNotLogin, function (req, res, next) {
  // res.send('注册')
  const name = req.fields.name
  const gender = req.fields.gender
  const bio = req.fields.bio
  const avatar = req.files.avatar.path.split(path.sep).pop()
  let password = req.fields.password
  const repassword = req.fields.repassword

  // 校驗參數
  try {
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字請限制在1~10個字符')
    }
    if (['m', 'f', 'x'].indexOf(gender) === -1) {
      throw new Error('性別只能是 m、f 或 x')
    }
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字請限制在1~10個字符')
    }
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字請限制在1~10個字符')
    }
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字請限制在1~10個字符')
    }
  } catch (e) {

  }

})

module.exports = router
