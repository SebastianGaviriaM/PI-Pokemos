import React, { useState } from "react";

const Form = (props)=>{

    const [input, setInput] =useState({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minYears: "",
        maxYears: ""
    })

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;

        setInput({
            ...input,
            [property]:value
        })
    }

    const submitHanlder = (event)=>{
        event.preventDefault();
    }
    return(
        <>
            <form onSubmit={submitHanlder}>
                <label htmlFor="name">Name:</label>
                <input type='text' name="name" value={input.name} onChange={changeHandler}></input>
                <label htmlFor="min height">Min height:</label>
                <input type='text' name="minHeight" value={input.minHeight} onChange={changeHandler}></input>
                <label htmlFor="max height">Max height:</label>
                <input type='text' name="maxHeight" value={input.maxHeight} onChange={changeHandler}></input>
                <label htmlFor="min weight">Min weight:</label>
                <input type='text' name="minWeight" value={input.minWeight} onChange={changeHandler}></input> 
                <label htmlFor="max weight">Max weight:</label>  
                <input type='text' name="maxWeight" value={input.maxWeight} onChange={changeHandler}></input>
                <label htmlFor="minYears">Min years:</label>
                <input type='text' name="minYears" value={input.minYears} onChange={changeHandler}></input>
                <label htmlFor="maxYears">Max years:</label>
                <input type='text' name="maxYears" value={input.maxYears} onChange={changeHandler}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}


export default Form;