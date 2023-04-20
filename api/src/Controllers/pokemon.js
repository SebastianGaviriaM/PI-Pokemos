const {Pokemon, Type} = require('../db');

const pokemonController =  {};


pokemonController.getAll= async () => {
    try {
      const pokemones = await Pokemon.findAll({
        include: Type
      });
      return pokemones;
    } catch (error) {
      console.error(error);
      // res.status(500).json({ message: 'Error devolviendo pokemones' });
    }
}

pokemonController.getID = async(id)=>{
  DBresult = await Pokemon.findByPk(id);

  return DBresult;  
}

pokemonController.createPokemon = async(image, name, height, weight, health, attack, defense, speed)=>{
  const newDog = await Pokemon.create({image, name, height, weight, health, attack, defense, speed});
  return newDog
}




pokemonController.getByName = async (name) => {

    const pokemon = await Pokemon.findOne({
      where: {name}
    });

    return pokemon;
   
}


module.exports = pokemonController;