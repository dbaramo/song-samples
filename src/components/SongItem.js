import React from 'react';
import apple_music_png from "../assets/apple_music2.svg";

const SongItem = (props) => {
  const { songData } = props;
  const albumImage = songData.artworkUrl100;
  const songUrl = songData.trackViewUrl;

  return (
    <div className="song-item">
      <div className="album">
        <img alt="presentation" src={albumImage.replace("/100x100bb.jpg", "/500x500bb.jpg")} className="cover-art" />
        <audio controls  src={songData.previewUrl} className="sound" />
      </div>
      <div className="description">
        <span className="artist-name">{songData.artistName} - </span>
        <span className="song-name">{songData.trackName}</span>
        <div>
        <a className="linkButton" href={songUrl} target="_blank">
          <img alt="" src={apple_music_png} onClick={() => console.log("dog")} />
        </a>
        </div>
      </div>
    </div>
  );
};


export default SongItem;