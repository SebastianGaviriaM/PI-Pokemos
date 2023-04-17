const Type = require('../models/Type');

const typeController =  {};


typeController.getAll= async (req, res) => {
    try {
      const types = await Type.findAll();
      res.json(types);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error devolviendo pokemones' });
    }
}


module.exports = typeController;