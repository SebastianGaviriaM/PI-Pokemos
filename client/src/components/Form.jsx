import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTypes } from "../redux/actions";
import axios from 'axios';

function Form() {

    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [error, setError] = useState(null);
    
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        height: '',
        weight: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        types: [],
    });


    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

   

    const handleInputChange = (event) => {
        const target = event.target;
        let value=0;
        if(target.type === 'checkbox'){
            value = target.checked
            if(formData.types.includes(target.id)){
                let lista = formData.types
                lista.splice(formData.types.indexOf(target.id), 1);
                setFormData({
                    ...formData,
                    types: lista
                })
                
            }
            else{
                let lista = formData.types;
                setFormData({
                    ...formData,
                    types: [...lista, target.id]
                })
                
            }
            
        }
        else{
            value = target.value;
            const name = target.name;

            setFormData({
            ...formData,
            [name]: value
        });

        }
        
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(isNaN(formData.height) || isNaN(formData.weight) || isNaN(formData.health) || isNaN(formData.attack) || isNaN(formData.defense) || isNaN(formData.speed)){
            setError('Los campos: Altura, peso, salud, ataque, defensa y velocidad deben ser numéricos');
            setFormData({
                ...formData,
                image: '',
                name: '',
                height: '',
                weight: '',
                health: '',
                attack: '',
                defense: '',
                speed: '',
            });
        }
        else{
            let result = await axios.post('http://localhost:3001/pokemon', {
                image: formData.image,
                name: formData.name,
                height: formData.height,
                weight: formData.weight,
                health: formData.health,
                attack: formData.attack,
                defense: formData.defense,
                speed: formData.speed,
                types: formData.types
            }).then(response=>response);
            console.log(result);
        }
    }

    if (types===undefined) {

        return <div>Cargando el pokemon...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} />

        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="height">Altura:</label>
        <input type="text" id="height" name="height" value={formData.height} onChange={handleInputChange} />

        <label htmlFor="weight">Peso:</label>
        <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleInputChange} />

        <label htmlFor="health">Salud:</label>
        <input type="text" id="health" name="health" value={formData.health} onChange={handleInputChange} />

        <label htmlFor="attack">Ataque:</label>
        <input type="text" id="attack" name="attack" value={formData.attack} onChange={handleInputChange} />

        <label htmlFor="defense">Defensa:</label>
        <input type="text" id="defense" name="defense" value={formData.defense} onChange={handleInputChange} />

        <label htmlFor="speed">Velocidad:</label>
        <input type="text" id="speed" name="speed" value={formData.speed} onChange={handleInputChange} />

        <label htmlFor="types">Tipos:</label>
        {types.map((type) => (
            <div key={type.id}>
            <input type="checkbox" id={type.id} name="types" value={type.name} onChange={handleInputChange} />
            <label htmlFor={type.name}>{type.name}</label>
            </div>
        ))}
        {error && <div>{error}</div>}
        <button type="submit">Agregar Pokémon</button>
        </form>
    );
}

export default Form;
