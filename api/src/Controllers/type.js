const {Type} = require('../db');

const typeController =  {};


typeController.getAll= async () => {
    try {
      const types = await Type.findAll();
      return types;
    } catch (error) {
      console.error(error);
      return { message: 'Error devolviendo pokemones' };
    }
}

typeController.createType = async(name)=>{
  const newType = await Type.create({name});
  return newType
}


module.exports = typeController;