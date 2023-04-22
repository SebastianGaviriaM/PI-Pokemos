import React from "react";
import { connect } from "react-redux";
import { getPoke } from "../../redux/actions";
import PokeCard from "./pokeCard";

class Home extends React.Component{

    componentDidMount(){
        this.props.getPoke();
    }

    render(){
        return(
            <>
                <h1>Componente Home</h1>
                {
                    this.props.pokemons.map(
                        (poke)=><PokeCard 
                            imagen={poke.image} 
                            name={poke.name} 
                            types={poke.types}
                            id={poke.id}
                        />
                    )
                }
            </>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getPoke: ()=>dispatch(getPoke())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);