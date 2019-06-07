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
  }

  handleClick(e) {
    console.log(e.target.children[0].id);
    this.setState({
      display: e.target.id.replace(/_/g, ' '),
      id: e.target.children[0].id
    });
  }

  componentDidUpdate() {
    console.log(document.getElementById(this.state.id));
    let vid = document.getElementById(this.state.id);
    vid.load();
    vid.play();
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div className="drum-pads">
          <div id="Air_Woosh_Underwater" className="drum-pad" onClick={this.handleClick}>
            Q
            <audio src="./sounds/Air_Woosh_Underwater.mp3" type="audio/mpeg" className="clip" id="Q"/>
          </div>
          <div id="Beep_Short" className="drum-pad" onClick={this.handleClick}>
            W
            <audio src="./sounds/Beep_Short.mp3" type="audio/mpeg" className="clip" id="W" />
          </div>
          <div id="Billiard_Balls_Hit" className="drum-pad" onClick={this.handleClick}>
            E
            <audio src="./sounds/Billiard_Balls_Hit.mp3" type="audio/mpeg" className="clip" id="E" />
          </div>
          <div id="Deadbolt_Lock" className="drum-pad" onClick={this.handleClick}>
            A
            <audio src="./sounds/Deadbolt_Lock.mp3" type="audio/mpeg" className="clip" id="A" />
          </div>
          <div id="Deck_of_Cards_on_Table" className="drum-pad" onClick={this.handleClick}>
            S
            <audio src="./sounds/Deck_of_Cards_on_Table.mp3" type="audio/mpeg" className="clip" id="S" />
          </div>
          <div id="Dirt_Shovel_On_Coffin" className="drum-pad" onClick={this.handleClick}>
            D
            <audio src="./sounds/Dirt_Shovel_On_Coffin.mp3" type="audio/mpeg" className="clip" id="D" />
          </div>
          <div id="Drill_Gear" className="drum-pad" onClick={this.handleClick}>
            Z
            <audio src="./sounds/Drill_Gear.mp3" type="audio/mpeg" className="clip" id="Z" />
          </div>
          <div id="Dumpster_Bottle_Smash" className="drum-pad" onClick={this.handleClick}>
            X
            <audio src="./sounds/Dumpster_Bottle_Smash.mp3" type="audio/mpeg" className="clip" id="X" />
          </div>
          <div id="Emergency_Siren_Short_Burst" className="drum-pad" onClick={this.handleClick}>
            C
            <audio src="./sounds/Emergency_Siren_Short_Burst.mp3" type="audio/mpeg" className="clip" id="C" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
