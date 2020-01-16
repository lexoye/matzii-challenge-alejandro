import React from 'react';

function MediaPlayer(props) {
  return (
    <div className="MediaPlayer-Container">
      {console.log(props.file_page_url)}
        <h2>Now Playing</h2>
        {/* <button onClick={this.SoundPlay}>Play</button> */}
    </div>
  );
}

export default MediaPlayer;