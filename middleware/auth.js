module.exports = {
    ensureAuth: function (req, res) {
        if(req.isAuthenticated()){
            return next()
        } else {
            res.redirect('/')
        }
    }
}