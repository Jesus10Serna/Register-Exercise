const express = require('express');

// Controllers
const {
    getAllRegisters,
    getRegisterById,
    createRegister,
    updateRegister,
    deleteRegister
} = require('../controllers/register.controller')

const registerRouter = express.Router();

registerRouter.get('/', getAllRegisters)

registerRouter.get('/', getRegisterById)

registerRouter.post('/', createRegister)

registerRouter.patch('/', updateRegister)

registerRouter.delete('/', deleteRegister)

module.exports = { registerRouter }