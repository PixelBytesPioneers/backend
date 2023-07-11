const JWT = require('passport-jwt');
const User = require('../models/user.js');
const JwtStratergy = JWT.Strategy;
const {JWT_SECRET} = require('./serverConfig.js');

const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

const passportAuth = (passport) => {
    try {
        passport.use(new JwtStratergy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));    
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = passportAuth;