const uuid = require('uuid');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../error/ApiError');
const { DeviceInfo } = require('@prisma/client');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await prisma.device.create({
                data: {
                    name, 
                    price,
                    brandId: parseInt(brandId),
                    typeId: parseInt(typeId),
                    img: fileName,
                },
            });


            if(info) {
               info = JSON.parse(info)
               info.forEach(i => {
                    prisma.deviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
               });
            }


            return res.json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, page, limit } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 12;
        const skip = (page - 1) * limit;
    
        let devices;
        let totalCount;
    
        if (brandId && typeId) {
            devices = await prisma.device.findMany({ 
                where: { 
                    brandId: parseInt(brandId), 
                    typeId: parseInt(typeId) 
                },
                take: limit,
                skip: skip
            });
    
            totalCount = await prisma.device.count({ 
                where: { 
                    brandId: parseInt(brandId), 
                    typeId: parseInt(typeId) 
                }
            });
        } else if (brandId) {
            devices = await prisma.device.findMany({ 
                where: { 
                    brandId: parseInt(brandId) 
                },
                take: limit,
                skip: skip
            });
    
            totalCount = await prisma.device.count({ 
                where: { 
                    brandId: parseInt(brandId) 
                }
            });
        } else if (typeId) {
            devices = await prisma.device.findMany({ 
                where: { 
                    typeId: parseInt(typeId) 
                },
                take: limit,
                skip: skip
            });
    
            totalCount = await prisma.device.count({ 
                where: { 
                    typeId: parseInt(typeId) 
                }
            });
        } else {
            devices = await prisma.device.findMany({ 
                take: limit,
                skip: skip
            });
    
            totalCount = await prisma.device.count();
        }
    
        return res.json({ devices, totalCount });
    }
    
    
    async getOne(req, res) {
        const { id } = req.params;
        const device = await prisma.device.findUnique({
            where: { id: parseInt(id) },
            include: {
                deviceInfo: true
            }
        });
        return res.json(device);
    }
    
    
}

module.exports = new DeviceController();
