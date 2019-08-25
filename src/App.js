import React from 'react';
import AmisLaskuri from './containers/AmisLaskuri';
import YoLaskuri from './containers/YoLaskuri';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <form>

    <AmisLaskuri></AmisLaskuri>
    <YoLaskuri></YoLaskuri>
      </form>
    </div>
  );
}

export default App;

      /*<div className="radio">
        <label>
            <input id="radioAmis" type="radio" value="<AmisLaskuri />"
            checked={this.state.selectedOption === 'AmisLaskuri'}
            onChange={this.handleOptionChange}/>Ammattikoulun pistelaskuri
        </label>
    </div>
    <div className="radio">
        <label>
            <input id="radioYo" type="radio" value="<YoLaskuri />"
            checked={this.state.selectedOption === 'YoLaskuri'}
            onChange={this.handleOptionChange}/>Ylioppilaiden pistelaskuri
        </label>
    </div>*/