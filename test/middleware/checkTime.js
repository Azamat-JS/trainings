const checkTime = function(req, res, next){
    req.checkTime = Date.now()
  next()
}

module.exports = checkTime