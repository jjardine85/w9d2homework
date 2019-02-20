import React from 'react';

const TrackItem = (props) => {
  return (
  <li className='track-item'>
    <h3>{props.position}</h3>
    <h2>{props.title}</h2>
    <h2>{props.artist}</h2>
  </li> )
}

export default TrackItem;
