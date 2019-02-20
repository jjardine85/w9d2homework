import React from 'react';
import TrackItem from './TrackItem'

const TrackList = (props) => {
  const trackNodes = this.props.data.feed.entry.map((data) => {
    return (
      {data}
    )
  })

  return (
    <ol className="track-list">
    {trackNodes}
    </ol>
  )
}

export default TrackList;
