const {personajes, usuarios_personajes} = require("../db/db");

const deletePersonaje = async(req,res)=>{
    try {
        const {id,user} = req.query;

        await usuarios_personajes.destroy({
            where:{usuarioId: user, personajeId:id}
        })

            const personajesIds = await usuarios_personajes.findAll({
                where: { usuarioId: user },
                attributes: ['personajeId']
            });
    
            const personajesCache = personajesIds.map((element) => element.personajeId);
    
            const personajesAll = await personajes.findAll({
                where: { id: personajesCache }
            });
    
            return res.status(201).json(personajesAll);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
    
}

module.exports = deletePersonaje;
