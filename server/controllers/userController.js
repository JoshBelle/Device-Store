const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const generateJWT = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        const candidate = await prisma.user.findUnique({ where: { email } });
        if (candidate) {
            return next(
                ApiError.badRequest('Пользователь с таким email уже существует')
            );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await prisma.user.create({
            data: {
                email,
                role,
                password: hashPassword,
            },
        });
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({ token });
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await prisma.user.findUnique({where:{email}})
        if(!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Пароли не совпадают'))
        }
        const token = generateJWT(user.id,user.email,user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController();
