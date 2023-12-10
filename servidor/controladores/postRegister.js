const {usuarios} = require("../db/db");

const registro = async function(req,res){
    try {
        const {email, password} = req.body;

        if(!email || !password) {return res.status(404)}

        const [user, created] = await usuarios.findOrCreate({
            where: {email},
            defaults: {
                password,
            },
        })

        if(!created){
            return res.status(409).json({error: "El email ya esta registrado"})
        }

        return res.status(200).json({register:"Te registraste correctamente"});

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = registro;