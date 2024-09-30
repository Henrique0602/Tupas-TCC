/* eslint-disable no-undef */
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Por favor insira um email válido']
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatória']
    },
    telefone: {
        type: String,
        required: [true, 'Telefone é obrigatório']
    },
    cep: {
        type: String,
        required: [true, 'CEP é obrigatório']
    }
});

const Usuarios = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuarios;
