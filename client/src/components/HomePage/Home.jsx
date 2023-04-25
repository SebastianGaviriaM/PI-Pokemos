import React from "react";
import { connect } from "react-redux";
import { getPoke } from "../../redux/actions";
import PokeCard from "./pokeCard";

class Home extends React.Component {
  state = {
    currentPage: 1,
    pageSize: 12,
    searchQuery: ""
  };

  componentDidMount() {
    this.props.getPoke();
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

    if (totalPokemons === 0) return <p>No hay Pokémons.</p>;

    const pageCount = Math.ceil(totalPokemons / pageSize);

    return (
      <>
        <h1>Componente Home</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Pokémons..."
            value={searchQuery}
            onChange={(e) => this.handleSearch(e.target.value)}
          />
        </div>
        {this.getPagedData().map((poke) => (
          <PokeCard
            imagen={poke.image}
            name={poke.name}
            types={poke.types}
            id={poke.id}
          />
        ))}
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() =>
                  this.handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                }
              >
                Anterior
              </button>
            </li>
            {Array.from({ length: pageCount }).map((_, index) => (
              <li
                key={index}
                className={
                  index + 1 === currentPage ? "page-item active" : "page-item"
                }
              >
                <button
                  className="page-link"
                  onClick={() => this.handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
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
        </nav>
      </>
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
