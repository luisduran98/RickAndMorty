const {usuarios, personajes, usuarios_personajes} = require("../db/db");
const axios = require("axios");

const postPersonajes = async(req,res)=>{
    try {
        
        const {id,user} = req.body;
        const URL = `https://rickandmortyapi.com/api/character/${id}`
        const {data} = await axios(URL);
        
        const [personaje, created] = await personajes.findOrCreate({
            where: {id: data.id, nombre: data.name, estado: data.status, especie: data.species, genero: data.gender, origen: data.origin.name, imagen: data.image}
        });
        
        // if(!created){return res.status(400).json({error: "Ya agregaste este personaje"})}

        const usuario = await usuarios.findByPk(user);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" })
        }

        await usuario.addPersonaje(personaje);
        
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

module.exports = postPersonajes;