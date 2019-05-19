const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
  name: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  avatar: {
    type: 'string',
    enum: ['m', 'f', 'x'],
    default: 'x'
  },
  gender: {
    type: 'string',
    required: true
  },
  bio: {
    type: 'string',
    required: true
  }
})
exports.User.index({ name: 1 }, { unique: true }).exec() // 根據用戶名找到用戶，用戶名全局唯一
