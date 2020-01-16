import React from 'react';

function MediaPlayer(props) {
  return (
    <div className="MediaPlayer-Container">
        <h2>Now Playing</h2>
        <p>{props.name}</p>
        <div className="MediaPlayer-control">
            <button className="ButtonPlay" onClick={this.handlePlay}>Play</button>
            <button className="Button-Pause" onClick={this.handlePause}>Pause</button>
        </div>
    </div>
  );
}

export default MediaPlayer;