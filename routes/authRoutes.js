const express = require('express');
const router = express.Router();
const { scopeAuth, callbackAuth, currentUser, logout } = require('../controllers/authControllers');

router.get('/auth/google',scopeAuth)
router.get('/auth/google/callback',callbackAuth,(req,res)=>{
 res.redirect('/dashboard')
})
router.get('/auth/current_user',currentUser)
router.get('/auth/logout',logout)


module.exports = router
