const { favoritos, usuarios, usuarios_favoritos } = require("../db/db");

const postFavoritos = async (req, res) => {
    try {
        const { id, nombre, origen, estado, imagen, especie, genero, idUsuario } = req.body;

        if (!id || !nombre || !origen || !estado || !imagen || !especie || !genero) {
            return res.status(401).json({ error: "Faltan datos" });
        }

        const [favorito, created] = await favoritos.findOrCreate({
            where: { id, nombre, origen, estado, imagen, especie, genero }
        });

        const usuario = await usuarios.findByPk(idUsuario);

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        await usuario.addFavorito(favorito);

        const favIds = await usuarios_favoritos.findAll({
            where: { usuarioId: idUsuario },
            attributes: ['favoritoId']
        });

        const favoritoIds = favIds.map((element) => element.favoritoId);

        const favoritosUsuario = await favoritos.findAll({
            where: { id: favoritoIds }
        });

        return res.status(201).json(favoritosUsuario);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = postFavoritos;


