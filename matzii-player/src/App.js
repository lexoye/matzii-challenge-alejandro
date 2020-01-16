import React, {Component} from 'react';
import './App.css';

// import MediaPlayer from './MediaPlayer';
import Track from './Track';

import { Howl, Howler } from 'howler';

class App extends Component {
    constructor() {
        super()
        this.state = {
            tracks: {},
            isLoading: true,
            nowPlaying: false,
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("http://ccmixter.org/api/query?f=json&limit=6&tag=synthesizer")
        .then(response => response.json())
        .then(data => {
            this.setState({
                tracks: data, isLoading: false
            })
        })
    }

    componentDidUpdate() {
        console.log(this.state.tracks.file_page_url);
    }

    SoundPlay() {
      const Sounds = new Howl({
        src: ["{tracks.file_page_url}"]
      })
    }

    //   Sounds.play() {
    //   console.log("Sounds")
    // }
    
    render() {
      var style = {
          textAlign: 'center',
      }
          
      if (this.state.isLoading) {
          return <h2 style={style}>Loading...</h2>
      }

      return (
        <div className="App">
            <div className="MediaPlayer-Container">
                {/* {console.log(tracks.file_page_url)} */}
                <h2>Now Playing</h2>
                {/* <button onClick={this.SoundPlay}>Play</button> */}
            </div>
            <div className="PlayList-Container" onClick={this.handleClick}>
                  <h2>Available Soundtracks</h2>
                  {this.state.tracks.map(
                      (track) => <Track key={track.upload_id} name={track.upload_name} artist={track.user_name} />
                  )}
            </div>
        </div>
      );
    }
}

export default App;
