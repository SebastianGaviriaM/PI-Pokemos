const axios = require('axios');
const express = require('express');
const typeRouter = express.Router();
const typeController = require('../controllers/type');

// Ruta para obtener todos los pokemones
typeRouter.get('/', async (req, res) =>{
    const APIResult = await axios.get('https://pokeapi.co/api/v2/type').then(response=>response.data.results);
    
    APIResult.forEach(async(element) => {
        await typeController.createType(element.name);
    });
    
    res.json({
        status:200,
        respuesta: `Se han insertado los tipos exitosamente`
    });
});



module.exports = typeRouter;
