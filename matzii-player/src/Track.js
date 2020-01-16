import React from 'react';

function Track(props) {
  return (
    <div className="PlayList-Track">
        {/* {console.log(props.name)} */}
        <p>{props.artist}</p>
        <h3>{props.name}</h3>
    </div>
  );
}

export default Track;