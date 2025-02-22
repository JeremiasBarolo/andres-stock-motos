const jwt = require("jsonwebtoken");
const fs = require("fs")
const path = require('path');


// Middleware para validar el token
const validateToken = (req, res, next) => {
    
    console.log(req.path)
    if (req.path === '/login') return next();

    const authHeader = req.headers.authorization;
    
    const keyPath = path.resolve(__dirname, '../key'); 
    const privateKey = fs.readFileSync(keyPath, 'utf8').trim();

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, privateKey);
        req.TOKEN_DATA = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
};
module.exports = {
    validateToken
}