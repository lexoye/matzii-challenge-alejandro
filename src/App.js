import React, { Component } from 'react';
import ReactHowler from 'react-howler';

import './App.css';
import Track from './Track';


class App extends Component {
    constructor() {
        super()
        this.state = {
            tracks: {},
            isLoading: true,
            playing: false,
            currentPlaying: {}
        }
        this.handleTrack = this.handleTrack.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)

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


    handleTrack(url) {
        this.setState({
            currentPlaying: url,
            playing: true,
        })
    }

    handlePlay() {
        this.setState({
            playing: true
        })
    }

    handlePause() {
        this.setState({
            playing: false
        })
    }

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
                    <h2>Now Playing</h2>
                    <p>{}</p>
                    <ReactHowler
                        src={this.state.currentPlaying}
                        playing={this.state.playing}
                    />
                    <div className="MediaPlayer-control">
                        <button className="MediaPlayer-Button" onClick={this.handlePlay}>
                            <i className="fa fa-play-circle"></i>
                        </button>
                        <button className="MediaPlayer-Button" onClick={this.handlePause}>
                            <i className="fa fa-pause-circle"></i>
                        </button>
                    </div>
                </div>
                <div className="PlayList-Container">
                    <h2>Available Soundtracks</h2>
                    {this.state.tracks.map(
                        (track) => <Track key={track.upload_id} name={track.upload_name} artist={track.user_name} id={track.upload_id} url={track.files[0].download_url} handleTrack={this.handleTrack} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
