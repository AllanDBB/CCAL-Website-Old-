const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    lastnames: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        enum: ['administrativo', 'usuario'],
        default: 'usuario'
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        required: false
    },
    
});

// Pre-save hook para hashear la contraseña antes de guardar el usuario.
UserSchema.pre('save', async function (next){
    if (this.isModified('password') || this.isNew ){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    }
    next();
});

// Método para verificar la contraseña.

UserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);