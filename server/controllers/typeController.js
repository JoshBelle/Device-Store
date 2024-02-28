const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await prisma.type.create({
            data: {
                name: name
            }
        });
        return res.json(type)
    }

    async getAll(req, res) {}

}

module.exports = new TypeController();
