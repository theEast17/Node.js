import passport from 'passport'
import pkg from 'passport-local';
import { PersonModel } from '../models/personSchema.js';
const { Strategy: LocalStrategy } = pkg;

export const passportAuth = passport.use(new LocalStrategy( { usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await PersonModel.findOne({ email })
        if (!user) {
            return done(null, false, { message: 'User is not present' })
        }
        const checkPassword = await user.comparePassword(password)
        if (checkPassword) {
            return done(null, user)
        } else {
            return done(null, false, { message: 'Password incorrect' })
        }
    } catch (error) {
        done(error)
    }
}))