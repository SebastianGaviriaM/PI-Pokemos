const axios = require('axios');
const express = require('express');
const typeRouter = express.Router();
const typeController = require('../controllers/type');

// Ruta para obtener todos los pokemones
typeRouter.get('/', async (req, res) =>{

    DBResult = await typeController.getAll();

    if(DBResult.length==0){
        const APIResult = await axios.get('https://pokeapi.co/api/v2/type').then(response=>response.data.results);
        
        for (const element of APIResult) {
            await typeController.createType(element.name);
        }

        DBNuevos = await typeController.getAll();
        console.log(DBNuevos); 


        res.json({
            status:200,
            respuesta: `Se han insertado los tipos exitosamente`,
            resultados: DBNuevos
        });
    }

    else{

        DBNuevos = await typeController.getAll();

        res.json({
            status:200,
            respuesta: `Los tipos ya habían sido ingresados`,
            resultados: DBNuevos
        });
    }
    
});


module.exports = typeRouter;
