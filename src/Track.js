import React from 'react';

function Track(props) {
  return (
    <div className="PlayList-Track" onClick={() => props.handleTrack(props.url)}>
      {/* {console.log(props)} */}
      <p>{props.artist}</p>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Track;