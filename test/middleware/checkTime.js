const checkTime = function(req, res, next){
    req.checkTime = `${new Date().getDay()}:${new Date().getMonth()}:${new Date().getFullYear()}`
  next()
}

module.exports = checkTime