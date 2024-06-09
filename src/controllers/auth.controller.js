const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const generateToken = require("../services/genereteToken.js")


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await loginService(email);

        if (!user) {
            console.error("Usuário não encontrado");
            return res.status(400).json({ message: "Email ou senha incorreta" });
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            console.error("Senha incorreta");
            return res.status(400).json({ message: "Email ou senha incorreta" });
        } 

        const token = generateToken(user.id);
        const id = user.id;
        res.status(200).send({token, id}) /*iinha proxia atualização é retirar esse id pois fica sem segurança porém para agora eu nao tenho outra maneira de usar*/



    } catch (error) {
        console.error("Erro ao tentar fazer login:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

const loginService = (email) => User.findOne({ email: email }).select("+password");




module.exports = login;
