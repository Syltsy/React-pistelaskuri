import React from 'react';
import AmisLaskuri from './AmisLaskuri';
import YoLaskuri from './YoLaskuri';
import { NavLink } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <form>
        <tr>
        <NavLink to="/AmisLaskuri">Ammattikoululaisten pistelaskuri</NavLink>
        </tr>
        <tr>
        <NavLink to="/YoLaskuri">Ylioppilaiden pistelaskuri</NavLink>
        </tr>
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