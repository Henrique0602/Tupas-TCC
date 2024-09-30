/* eslint-disable no-undef */
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const connectDB = require("./connectDB");
const Usuarios = require("./models/Login");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Get all usuarios
app.get("/api/usuarios", async (req, res) => {
    try {
        const data = await Usuarios.find({});

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Create a usuario
app.post("/api/usuarios", async (req, res) => {
    try {
        const { nome, email, senha, telefone, cep } = req.body;

        const existingUsuario = await Usuarios.findOne({ email });
        if (existingUsuario) {
            return res.status(400).json({ message: "Email já cadastrado." });
        }

        if (!nome || !email || !senha || !telefone || !cep) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);

        const newUsuario = new Usuarios({
            nome,
            email,
            senha: hashedPassword,
            telefone,
            cep,
        });

        await newUsuario.save();

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: 'Ocorreu um erro ao tentar cadastrar o usuário.' });
    }
});




// Delete a usuario by Id
app.delete("/api/usuarios/:id", async (req, res) => {
    try {
        const usuarioId = req.params.id;

        const data = await Usuarios.findByIdAndDelete(usuarioId);

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Update a usuario
app.put("/api/usuarios/:id", async (req, res) => {
    try {
        const usuarioId = req.params.id;

        const { email, senha } = req.body;

        const data = await Usuarios.findByIdAndUpdate(usuarioId, { email, senha });

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Login usuario
app.post("/api/usuarios/login", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuarios.findOne({ email });

        if (!usuario) {
            return res.status(400).json({ message: "Usuário não encontrado." });
        }

        const isMatch = await bcrypt.compare(senha, usuario.senha);

        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta." });
        }

        res.status(200).json({ message: "Login bem-sucedido." });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ message: "Erro no servidor." });
    }
});




// Check if Email Exists
app.post("/api/usuarios/check-email", async (req, res) => {
    const { email } = req.body;

    try {
        const usuario = await Usuarios.findOne({ email });

        if (usuario) {
            return res.status(200).json({ exists: true });
        }

        res.status(200).json({ exists: false });
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor." });
    }
});

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});