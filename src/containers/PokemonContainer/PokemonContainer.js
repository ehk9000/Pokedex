
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';

export class PokemonContainer extends Component {
   componentDidMount() {
     this.props.fetchPokemon();
   }
   
  render() {
    return (
      <main>
  
      </main>
    )
  }
}

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
})

export const mapDispatchToProps = dispatch => ({
  fetchPokemon: () => dispatch(fetchPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);