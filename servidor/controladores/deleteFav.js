const {favoritos, usuarios_favoritos} = require("../db/db");

const deleteFav = async(req,res)=>{
    try {
        const {userId,favId} = req.query;

        await usuarios_favoritos.destroy({
            where:{usuarioId: userId, favoritoId: favId
            }
        })

        const favorito = await usuarios_favoritos.findAll({
            where:{usuarioId: userId},
            attributes: ['favoritoId']
        })

        const favoritoIds = favorito.map((element) => element.favoritoId);

        const favoritosUsuario = await favoritos.findAll({
            where: { id: favoritoIds }
        });

        return res.status(201).json(favoritosUsuario);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteFav;