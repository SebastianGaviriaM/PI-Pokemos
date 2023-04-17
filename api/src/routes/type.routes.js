const express = require('express');
const typeRouter = express.Router();
const typeController = require('../controllers/type');

// Ruta para obtener todos los pokemones
typeRouter.get('/', async(req, res) =>{
    const APIResult = await axios.get('https://pokeapi.co/api/v2/type').then(response=>response.data.results);
    res.json(APIResult);
});

// Ruta para obtener un pokemon por su id
// router.get('/:id', pokemonController.getById);

// // Ruta para obtener un pokemon por su nombre
// router.get('/name/:name', pokemonController.getByName);

module.exports = typeRouter;
