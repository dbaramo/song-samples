import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SongItem from './components/SongItem';
import SongList from './components/SongList';
import searchiTunes from './utils/searchiTunes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: [],
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    searchiTunes(this.state.song)
      .then(({ results }) => this.setState({ tracks: results }));
  }

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className="App">
        <SearchBar updateText={(song) => this.setState({ song, songPosition: 0 })} fetchSongs={this.fetchSongs} />
        {tracks.length > 0 && <SongItem songData={tracks[songPosition]} />}
        {tracks.length > 0 && <SongList listOfSongs={tracks} selectSong={(songPosition) => this.setState({ songPosition })} />}
      </div>
    );
  }
}

export default App;