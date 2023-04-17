const axios = require('axios');
const express = require('express');
const pokRouter = express.Router();
const pokemonController = require('../Controllers/pokemon.js');

// Ruta para obtener todos los pokemones
pokRouter.get('/', async(req, res) =>{
    const DBResult = await pokemonController.getAll();
    const APIResult = await axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>response.data.results);


    
    res.json([...DBResult, ...APIResult]);
});





// Ruta para obtener un pokemon por su id
pokRouter.get('/:id', async(req, res)=>{
    const { id } = req.params;

    // const DBResult = pokemonController.getById(id);

    const APIResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>response.data).catch(error=>{console.log(error)});
    
   
    
    res.json(APIResult);


    // const APIData = {
    //     id: APIResult.id,
    //     name: APIResult.name,
    //     image: APIResult.sprites.front_shiny,
    //     weight: APIResult.weight,
    //     height: APIResult.height
    // } 
    
    // APIResult.stats.forEach(element => {
    //     switch (element.stat.name) {
    //         case 'hp':
    //             APIData.health = element.base_stat;
    //             break;
    //         case 'attack':
    //             APIData.attack = element.base_stat;
    //         case 'defense':
    //             APIData.defense = element.base_stat;
    //         case 'speed':
    //             APIData.speed = element.base_stat;
    //         default:
    //             break;
    //     }
    // });
    
});

// // Ruta para obtener un pokemon por su nombre
// router.get('/name/:name', pokemonController.getByName);

module.exports = pokRouter;
