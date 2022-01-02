import React from 'react';


const eachSong = (props) => {
  return (
    <div className="eachSong">
      <img alt="presentation" src={props.artworkUrl100.replace("/100x100bb.jpg", "/500x500bb.jpg")} className="listImage" />
      <span className="listDescriptions">{props.artistName} - {props.trackName}</span>
    </div>
  );
};


const SongList = (props) => (
  <div className="songList">
    {props.listOfSongs.map((songData, index) => <div
      key={songData.trackId}
      onClick={() => props.selectSong(index)}
    >
        {eachSong(songData)}
    </div>)}
  </div>
);

export default SongList;