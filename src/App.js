import React from 'react';
import './App.css';
import Pads from './Pads';
import DrumPad from './DrumPad';

const preStyle = "background-color: hsl(150, 100%, 25%);font-weight: bold;font-size: 2rem;color: hsl(150, 100%, 97%);box-shadow: 4px 4px 3px hsl(150, 100%, 10%);border-radius: 5px;";
const clickedStyle = "cursor: pointer;background-color: hsl(150, 100%, 40%);font-size: 3rem;";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Display',
      id: '',
      volume: 0.4
    }
    this.handleClick = this.handleClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(display, id) {
    this.setState({
      display,
      id
    });
  }

  handleChange(e) {
    this.setState({
      volume: e.target.value
    });
  }

  componentDidUpdate() {
    if (document.getElementById(this.state.id) !== null) {
      console.log(document.getElementById(this.state.id));
      let pad = document.getElementById(this.state.display);
      pad.setAttribute('style', clickedStyle);
      setTimeout( () => {
        pad.setAttribute('style', preStyle);
      }, 200);
      let vid = document.getElementById(this.state.id);
      vid.currentTime = 0;
      vid.volume = this.state.volume;
      vid.play();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    console.log(e, this.state.volume);
    let key = e.key.toUpperCase();
    // console.log(pads.filter(p => p.letter === key).length > 0);
    if (Pads.filter( p => p.letter === key).length > 0) {
      let display = document.getElementById(key).parentElement.id;
      this.setState({
        display,
        id: key
      });
    } else if (key === 'ARROWRIGHT' && this.state.volume < 1) {
      console.log('arrow key entered: ' + key);
      this.setState({
        volume: Math.round((this.state.volume + 0.2) * 10) / 10
      });
    } else if (key === 'ARROWLEFT' && this.state.volume > 0.1) {
      this.setState({
        volume: Math.round((this.state.volume - 0.2) * 10) / 10
      });
    }
  }
  render() {
    return (
      <div id="container">
        <header>
          <h1>Drum Machine (using keypad)</h1>
        </header>
        <div id="drum-machine">
          <div className="drum-display">
            <div id="display">
              <p>{this.state.display}</p>
            </div>
            <div id="volume">
              <p id="volume-label">Volume:</p>
              <span id="volume-value">{this.state.volume * 10}</span>
              <input id="slider" type="range" min="0" max="1" value={this.state.volume} onChange={this.handleChange} step="0.2" />
            </div>
          </div>
          <div className="drum-pads">
            {Pads.map( (pad, index) => 
              <DrumPad pad={pad} drumClick={this.handleClick} key={index} volume={this.state.volume}/>
            )}
          </div>
        </div>
        <footer>
          <p>Designed and Coded by <b>Jin Park</b></p>
        </footer>
      </div>
    );
  }
}

export default App;
