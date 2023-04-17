const {Pokemon} = require('../db');

const pokemonController =  {};


pokemonController.getAll= async () => {
    try {
      const pokemones = await Pokemon.findAll();
      return pokemones;
    } catch (error) {
      console.error(error);
      // res.status(500).json({ message: 'Error devolviendo pokemones' });
    }
}

pokemonController.getById= async (id) => {
    try {
      const pokemon = await Pokemon.findByPk(id);
      if (pokemon) {
        res.json(pokemon);
      } else {
        res.status(404).json({ message: `No se encuentra el pokemon con el id: ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error devolviendo el pokemon id: ${id}` });
    }
}

// pokemonController.getByName = async (req, res) => {
//     const { name } = req.params;

//     try {
//       const pokemon = await Pokemon.findOne({
//         where: {
//           name: {
//             [Op.iLike]: name,
//           },
//         },
//       });
//       if (pokemon) {
//         res.json(pokemon);
//       } else {
//         res.status(404).json({ message: `Pokemon with name ${name}` });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: `Error retrieving pokemon with name ${name}` });
//     }
// }


module.exports = pokemonController;