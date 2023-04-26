import React from "react";
import { connect } from "react-redux";
import { getPoke } from "../../redux/actions";
import PokeCard from "../pokeCard/pokeCard";
import styles from "./home.module.css"

class Home extends React.Component {
  state = {
    currentPage: 1,
    pageSize: 15,
    searchQuery: ""
  };

  componentDidMount() {
    if(this.props.pokemons.length===0){
      this.props.getPoke();
    }
    
  }

  getPagedData = () => {
    const { pokemons } = this.props;
    const { currentPage, pageSize, searchQuery } = this.state;

    let filtered = pokemons;

    if (searchQuery) {
      filtered = pokemons.filter((poke) =>
        poke.name.toLowerCase()===searchQuery.toLowerCase()
      );
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return filtered.slice(startIndex, endIndex);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    const { pokemons } = this.props;
    const { currentPage, pageSize, searchQuery } = this.state;

    const totalPokemons = pokemons.length;

    if (totalPokemons === 0) return <div className={styles.fondo}><p className={styles.carga}>Cargando pokemones</p></div>;

    const pageCount = Math.ceil(totalPokemons / pageSize);

    return (
      <div className={styles.fondo}>
        <h1 className={styles.titulo}>Pokemones</h1>
        <div>
          <input
            type="text"
            
            placeholder="Buscar Pokemones..."
            value={searchQuery}
            onChange={(e) => this.handleSearch(e.target.value)}
            className={styles.buscador}  
          />
        </div>

        <div className={styles.pokemones}>
          {this.getPagedData().map((poke) => (
            <PokeCard
              imagen={poke.image}
              name={poke.name}
              types={poke.types}
              id={poke.id}
            />
          ))}
        </div>
          <ul className={styles.paginacion}>
            <li>
              <button
                
                onClick={() =>
                  this.handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                }
                className={styles.botonPaginacion}
              >
                Anterior
              </button>
            </li>
            {Array.from({ length: pageCount }).map((_, index) => (
              <li   
              >
                <button onClick={() => this.handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                
                onClick={() =>
                  this.handlePageChange(
                    currentPage === pageCount ? currentPage : currentPage + 1
                  )
                }
              >
                Siguiente
              </button>
            </li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPoke: () => dispatch(getPoke())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
