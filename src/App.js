import React from 'react';
import './App.css';

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

  handleClick(e) {
    console.log(e.target.children[0].id);
    this.setState({
      display: e.target.id,
      id: e.target.children[0].id
    });
  }

  componentDidUpdate() {
    console.log(document.getElementById(this.state.id));
    let pad = document.getElementById(this.state.display);
    const preStyle = " background-color: hsl(150, 100%, 25%);font-weight: bold;font-size: 2rem;color: hsl(150, 100%, 97%);box-shadow: 4px 4px 3px hsl(150, 100%, 10%);border-radius: 5px;";
    const hoverStyle = "cursor: pointer;background-color: hsl(150, 100%, 40%);font-size: 3rem;";
    pad.setAttribute('style', hoverStyle);
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
    if (key === 'Q' || key === 'W' || key === 'E' || key === 'A' || key === 'S' || key === 'D' || key === 'Z' || key === 'X' || key === 'C') {
      let display = document.getElementById(key).parentElement.id.replace(/_/g, ' ');
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
          <div id="Heater-1" className="drum-pad" onClick={this.handleClick}>
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mpeg" className="clip" id="Q"></audio>
          </div>
          <div id="Heater-2" className="drum-pad" onClick={this.handleClick}>
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mpeg" className="clip" id="W"></audio>
          </div>
          <div id="Heater-3" className="drum-pad" onClick={this.handleClick}>
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mpeg" className="clip" id="E"></audio>
          </div>
          <div id="Heater-4" className="drum-pad" onClick={this.handleClick}>
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mpeg" className="clip" id="A"></audio>
          </div>
          <div id="Clap" className="drum-pad" onClick={this.handleClick}>
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg" className="clip" id="S"></audio>
          </div>
          <div id="Open-HH" className="drum-pad" onClick={this.handleClick}>
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg" className="clip" id="D"></audio>
          </div>
          <div id="Kick-n'-Hat" className="drum-pad" onClick={this.handleClick}>
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mpeg" className="clip" id="Z"></audio>
          </div>
          <div id="Kick" className="drum-pad" onClick={this.handleClick}>
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mpeg" className="clip" id="X"></audio>
          </div>
          <div id="Closed-HH" className="drum-pad" onClick={this.handleClick}>
            C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mpeg" className="clip" id="C"></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
