const passport = require('passport');

const scopeAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const callbackAuth = passport.authenticate('google');

const currentUser = ((req,res)=>{
 res.send(req.user)
}
)

const logout = ((req,res)=>{
 req.logout()
 res.send(req.user)
})

module.exports = {
  scopeAuth,
  callbackAuth,
  currentUser,
  logout
};

