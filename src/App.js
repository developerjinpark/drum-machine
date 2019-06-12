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
      display: '',
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleClick(display, id) {
    this.setState({
      display,
      id
    });
  }

  componentDidUpdate() {
    console.log(document.getElementById(this.state.id));
    let pad = document.getElementById(this.state.display);
    pad.setAttribute('style', clickedStyle);
    setTimeout( () => {
      pad.setAttribute('style', preStyle);
    }, 200);
    let vid = document.getElementById(this.state.id);
    vid.currentTime = 0;
    vid.play();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    let key = e.key.toUpperCase();
    // console.log(pads.filter(p => p.letter === key).length > 0);
    if (Pads.filter( p => p.letter === key).length > 0) {
      let display = document.getElementById(key).parentElement.id;
      this.setState({
        display,
        id: key
      });
    }
  }
  render() {
    return (
      <div id="drum-machine">
        <div className="drum-display">
          <div id="display">{this.state.display}</div>
        </div>
        <div className="drum-pads">
          {Pads.map( (pad, index) => 
            <DrumPad pad={pad} drumClick={this.handleClick} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
