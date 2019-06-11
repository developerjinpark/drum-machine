import React from 'react';

const DrumPad = props => {
  return (
    <div id={props.pad.sound} className="drum-pad" onClick={() => {props.drumClick(props.pad.sound, props.pad.letter)}}>
      {props.pad.letter}
      <audio src={"https://s3.amazonaws.com/freecodecamp/drums/" + props.pad.source + ".mp3"} type="audio/mpeg" className="clip" id={props.pad.letter}></audio>
    </div>
  );
}

export default DrumPad