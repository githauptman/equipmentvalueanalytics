import React from 'react';
import './App.css';
import CreateSeries from './components/createSeries';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreateSeries />
      </div>
    );
  }
}
