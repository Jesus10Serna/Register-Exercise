// Models 
const {Register} = require('../models/register.model')

const getAllRegisters = async (req, res) => {
    try {
        const registers = await Register.findAll()

        res.status(201).json({
            status: 'success',
            registers
        })

    } catch (err) {
        console.log(err);
    }
};

const getRegisterById = async (req, res) => {
    const { id } = req.params;

    const register = await Register.findOne({ where: { id } })

    if(!register) {
        res.status(404).json({
            status: 'error',
            message: 'Register does not exist'
        })
    }

    res.status(200).json({
        status: 'success',
        register
    })
};

const createRegister = async (req, res) => {
    try {

        const {name, entranceTime, exitTime} = req.body;

        const newRegister = await Register.create({
            id : Math.floor (Math.random() * 1000),
            name,
            entranceTime,
            exitTime
        })

        registers.push(newRegister);

        res.status(201).json({
            status: 'success',
            newRegister
        })

    } catch (err) {
        console.log(err);
    }
}

const updateRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const { entranceTime } = req.body;
        const { exitTime } = req.body;
        const { status } = req.body;

        const register = await Register.findOne({ where: { id }})

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register does not exist'
            })
        }

        await register.update({ entranceTime, exitTime, status })

        res.status(204).json({
            status: 'success'
        })

    } catch (err) {
        console.log(err);
    }
};

const deleteRegister = async (req, res) => {
    const { id } = req.params;

    const register = await Register.findOne({ where: { id } })

    if (!register) {
        res.status(404).json({
            status: 'error',
            message: 'Register does not exist'
        })
    } 

    await register.update({status: 'deleted'});

    res.status(204).json({status: 'success'})
}

module.exports = {getAllRegisters, getRegisterById, createRegister, updateRegister, deleteRegister};