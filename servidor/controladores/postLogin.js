const {usuarios, usuarios_favoritos, favoritos, personajes, usuarios_personajes} = require("../db/db");

const getLogin = async(req,res)=>{

    try {
        const {email,password} = req.body;
        const user = await usuarios.findOne({
            where: {email}})

        if(!email || !password) {return res.status(400)}

        if(!user){
        return res.status(403).json({error: "Mail no encontrado"})
        }

        const favIds = await usuarios_favoritos.findAll({
            where: { usuarioId: user.id },
            attributes: ['favoritoId']
        });

        const favoritoIds = favIds.map((element) => element.favoritoId);

        const favoritosUsuario = await favoritos.findAll({
            where: { id: favoritoIds }
        });

        const personajesIds = await usuarios_personajes.findAll({
            where: { usuarioId: user.id },
            attributes: ['personajeId']
        });

        const personajesCache = personajesIds.map((element) => element.personajeId);

        const personajesAll = await personajes.findAll({
            where: { id: personajesCache }
        });


        if(user){
            if(user.password === password){
                return res.status(200).json({access:true, userId: user.id, favoritos: favoritosUsuario, personajes: personajesAll})
            }
            else {
                return res.status(403).json({error:"Contraseña incorrecta"})
            }
        }

    }catch (error) {
    
        res.status(500).json({error: error.message})
    }}


    module.exports = getLogin;