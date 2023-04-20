import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../../redux/actions";
import DogCard from "./dogCard";

class Home extends React.Component{

    componentDidMount(){
        this.props.getDogs();
    }

    render(){
        return(
            <>
                <h1>Componente Home</h1>
                {
                    this.props.dogs.map(
                        (dog)=><DogCard 
                            imagen={dog.image} 
                            name={dog.name} 
                            temperaments={dog.temperaments} 
                            weight={dog.weight}
                            key={dog.id}
                            id={dog.id}
                        />
                    )
                }
            </>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
        dogs: state.dogs
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getDogs: ()=>dispatch(getDogs())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);