const db = require('../models/user')

// Register Validation
const registerValidation = (data) => {
    const schema = db.object({
        name: db.string().min(3).required(),
        email: db.string().min(6).required().email(),
        password: db.string().min(6).required()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = db.object({
        email: db.string().min(6).required().email(),
        password: db.string().min(6).required()
    });
    return schema.validate(data);
} 

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;