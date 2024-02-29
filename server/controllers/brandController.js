const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await prisma.brand.create({
            data: {
                name: name
            }
        }); 
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await prisma.brand.findMany()
        return res.json(brands)
    }

}

module.exports = new BrandController();
