require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const path = require('path');

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибки, последний middleware
app.use(errorHandler);

const start = async () => {
    try {
        await prisma.$connect();
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    } catch (e) {
        console.error('Ошибка запуска сервера:', e);
    }
};

start();

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit();
});
