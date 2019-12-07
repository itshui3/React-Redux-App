import React from 'react';
import { connect } from 'react-redux'
import { getData } from './redux/actions'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <button onClick={props.getData}>Fetch Data From Source</button>
      {
        props.foxImgSrc && <img src={props.foxImgSrc} />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    foxImgSrc: state.data
  }
}

export default connect(mapStateToProps, {
  getData
})(App);
