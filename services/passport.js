const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

// Deserialize user
passport.deserializeUser(async (googleId, done) => {
 try {
    const user = await User.findOne({ googleId }); // Find user by googleId
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
 new GoogleStrategy(
  {
 clientID: keys.googleClientID,
 clientSecret:keys.googleClientSecret,
 callbackURL:'/auth/google/callback',
 proxy: true
},

async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    done(null, existingUser);
  } else {
    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
  }
}));
