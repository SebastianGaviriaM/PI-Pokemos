const axios = require('axios');
const express = require('express');
const pokRouter = express.Router();
const pokemonController = require('../Controllers/pokemon.js');

// Ruta para obtener todos los pokemones
pokRouter.get('/', async(req, res) =>{
    const DBResult = await pokemonController.getAll();

    let listaAPI = [];
    
    const APIResult = await axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>response.data);


    listaAPI = [...listaAPI, ...APIResult.results];
    let next = APIResult.next


    while(listaAPI.length<50){         //Esta clausula funciona como ejemplo, se puede colocar listaAPI.length<APIResult.count para obtenerlos todos
        let nextGet = await axios.get(next).then(response=>response.data);
        listaAPI = [...listaAPI, ...nextGet.results];
        next = nextGet.next;
    }

    let listaPokeAPI = [];
    
    for (let index = 0; index < listaAPI.length; index++) {
        const element = listaAPI[index];
        let consulta = await axios.get(element.url).then(response=>response.data);
        let Data = {
            id: consulta.id,
            name: consulta.name,
            image: consulta.sprites.front_shiny,
            weight: consulta.weight,
            height: consulta.height
        } 
        consulta.stats.forEach(element => {
            switch (element.stat.name) {
                case 'hp':
                    Data.health = element.base_stat;
                    break;
                case 'attack':
                    Data.attack = element.base_stat;
                case 'defense':
                    Data.defense = element.base_stat;
                case 'speed':
                    Data.speed = element.base_stat;
                default:
                    break;
            }
        });
        Data.types = [];
        consulta.types.forEach(element=>{
            Data.types.push(element.type.name);
        })

        listaPokeAPI.push(Data)
        
    }

    res.json([...DBResult, ...listaPokeAPI]);
});








pokRouter.get('/name', async(req, res)=>{
    const name = req.query.name;
    const APIResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>{
        if(response.status==200){
            return response;
        }
        else{
            throw new Error('Error en la respuesta de la API');
        }
        
    }).catch(error=>error);

    if(APIResult.status==200){
    Data = {
        id: APIResult.data.id,
        name: APIResult.data.name,
        image: APIResult.data.sprites.front_shiny,
        weight: APIResult.data.weight,
        height: APIResult.data.height
    } 
    
    APIResult.data.stats.forEach(element => {
        switch (element.stat.name) {
            case 'hp':
                Data.health = element.base_stat;
                break;
            case 'attack':
                Data.attack = element.base_stat;
            case 'defense':
                Data.defense = element.base_stat;
            case 'speed':
                Data.speed = element.base_stat;
            default:
                break;
        }
    });
    Data.types = [];
    APIResult.data.types.forEach(element=>{
        Data.types.push(element.type.name);
    })


    }
    else{
        const DBResult = await pokemonController.getByName(name);
        Data = DBResult.dataValues;
    }

    res.json(Data);
});



pokRouter.post('/', async(req, res) =>{
    const {image, name, height, weight, health, attack, defense, speed, types} = req.body;
    const result = await pokemonController.createPokemon(image, name, height, weight, health, attack, defense, speed);

    await result.setTypes(types);

    res.json({
        status:200,
        respuesta: `Se ha creado el usuario ${name}`
    });
});


// Ruta para obtener un pokemon por su id
pokRouter.get('/:id', async(req, res)=>{
    const { id } = req.params;
    let Data = {};

    const APIResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>{
        if(response.status==200){
            return response;
        }
        else{
            throw new Error('Error en la respuesta de la API');
        }
        
    }).catch(error=>error);

    if(APIResult.status==200){
    Data = {
        id: APIResult.data.id,
        name: APIResult.data.name,
        image: APIResult.data.sprites.front_shiny,
        weight: APIResult.data.weight,
        height: APIResult.data.height
    } 
    
    APIResult.data.stats.forEach(element => {
        switch (element.stat.name) {
            case 'hp':
                Data.health = element.base_stat;
                break;
            case 'attack':
                Data.attack = element.base_stat;
            case 'defense':
                Data.defense = element.base_stat;
            case 'speed':
                Data.speed = element.base_stat;
            default:
                break;
        }
    });
    Data.types = [];
    APIResult.data.types.forEach(element=>{
        Data.types.push(element.type.name);
    })
    }
    else{
        const DBResult = await pokemonController.getID(id);
        Data = DBResult.dataValues;
    }

    res.json(Data);
  
});



// // Ruta para obtener un pokemon por su nombre
// router.get('/name/:name', pokemonController.getByName);

module.exports = pokRouter;
