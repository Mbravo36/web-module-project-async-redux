import React from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';

import {getPokemon} from '.actions';
import PokeList from './PokeList';
import PokeForm from './PokeForm'


import './App.css';

function App(props) {
const { loading, getPokemon } = props;

useEffect(() => {
  getPokemon();
}, []);

  return (
    <div className="App">
      <h1> Search For Pokemon</h1>
      <PokeForm />
    {
      loading ? <h3> It is Loading</h3> : <PokeList />
    }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapActionsToProps = () => {
  return {
    fetchStart
  }
}

export default connect(mapStateToProps, { getPokemon })(App);