const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },

})
// UserSchema.pre('save', function(next){
//     if(!this.isModified('password'))
//     return next()
//     bcrypt.hash(this.password,10,(err, passwordHash) =>{
//         if(err)
//         return next(err)
//         this.password = passwordHash
//         next()
//     })
// })
// UserSchema.methods.comparePassword = function(password, cb){
//     bcrypt.compare(password,this.local.password,(err, isMatch) =>{
//         if(err)
//         return cb(err)
//         else{
//             if(!isMatch)
//             return cb(null, isMatch)
//             return cb(null, this)
//         }
//     })

const User = mongoose.model("User", UserSchema)
module.exports = User