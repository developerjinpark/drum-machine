# Front End Libraries Projects - Build a Drum Machine

Objective: Build a CodePen.io app that is functionally similar to this: [https://codepen.io/freeCodeCamp/full/MJyNMd](https://codepen.io/freeCodeCamp/full/MJyNMd).

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story:

1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

2. Within #drum-machine I can see an element with a corresponding id="display".

3. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

4. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

5. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

**Note:**

To handle a button click

```jsx
// On App.js
handleClick(event) {
  this.setState({
    display: event.target.id,
    id: event.target.children[0].id
  });
}
render() {
  return (
    :
    <div className="drum-pads">
      <div id="Header-1" className="drum-pad" onClick={this.handleClick}>
```

To handle a key down

```jsx
// On App.js
componentDidMount() {
  document.addEventListener('keydown', this.onKeyDown);
}
componentWillUnmount() {
  document.addEventListener('keydown', this.onKeyDown);
}
onKeyDown(event) {
  let key = event.key.toUpperCase();
  if (pads.filter( pad => pad.letter === key).length > 0) {
    let display = document.getElementById(key).parentElement.id;
    this.setState({
      display,
      id: key
    });
  }
}
```

To play audio

```jsx
// On App.js
componentDidUpdate() {
  let aid = document.getElementById(this.state.id);
  aid.currentTime = 0;
  aid.play();
}
```

To change display of button

```jsx
// On App.js
const preStyle = "font-weight:bold;font-size:2rem; background-color:hsl(150,100%,25%); color:hsl(150,100%,97%);box-shadow:4px 4px 3px hsl(150,100%,10%);border-radius:5px;";
const clickedStyle = "cursor:pointer;font-size:3rem;background-color:hsl(150,100%,40%)";
componentDidUpdate() {
  let pad = document.getElementById(this.state.display);
  pad.setAttribute('style', clickedStyle);
  setTimeout( () => {
    pad.setAttribute('style', preStyle);
  }, 200);
}
```

To separate drum-pad and using map

```jsx
// On Pads.js
const Pads = [
  {
    letter: "Q",
    sound: "Heater-1",
    source: "Heater-1"
  }, {
    :
  }
];
Export default Pads

// On DrumPad.js
import React from 'react';
const DrumPad = props => {
  return (
    <div id={props.pad.sound} className="drum-pad" onClick={ () => {props.drumClick(props.pad.sound, props.pad.letter)}}>
      {props.pad.letter}
      <audio src={"https://s3.amazonaws.com/freecodecamp/drums/" + props.pad.source + ".mp3"} type="audio/mpeg" className="clip" id={props.pad.letter}></audio>
    </div>
  );
}
export default DrumPad

// On App.js
import Pads from './Pads';
import DrumPad from './DrumPad';
handleClick(display, id) {
  this.setState({
    display,
    id
  });
}
render() {
  return (
    <div className="drum-pads">
      {Pads.map( (pad, index) => <DrumPad pad={pad} drumClick={this.handleClick} key={index} />
```

To add a volume controller

```jsx
// On App.js
this.state = {
  display: '',
  id: '',
  volume: 0.4
}

handleChange(e) {
  this.setState({
    volume: e.target.value
  });
}
componentDidUpdate() {
  // To check if a button’s clicked or typed
  if (document.getElementById(this.state.id) !== null) {  
    :
    aid.volume = this.state.volume;
    aid.play();
  }
}
render () {
  return (
      :
      <input id=”slider” type=”range” min=”0” max=”1” value={this.state.volume} onChange={this.handleChange} step=”0.2” />
    </div>
    <div className="drum-pads">
      {Pads.map( …  volume={this.state.volume} /> )}

// On DrumPad.js
<audio …  volume={props.volume}></audio>
```
