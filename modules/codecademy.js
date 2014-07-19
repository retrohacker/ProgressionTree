var codecademy = require('codecademy')
  , opener = require('opener')
  , username
  , m = module.exports = {}

m.setUsername = function setUsername(name,cb) {
  codecademy.getProgress(name,"javascript",function(e) {
    if(!e) username = name
    return cb(e)
  })
}

m.isInit = function isInit() {
  return typeof username !== "undefined"
}

m.getProgress = function(def,cb) {
  codecademy.getProgress(username,def.course,cb)
}

m.launch = function(def) {
  var url = "http://www.codecademy.com/tracks/"+def.course
  console.log(url)
  opener(url)
}
