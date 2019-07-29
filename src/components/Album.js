import React from 'react'
import axios from 'axios'
import '../styles/Album.css'
import { Link } from 'react-router-dom'
import { MDBMask, MDBView } from "mdbreact";
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";





class Album extends React.Component {
    state = {
        photos: [],
        albumName: '',
        albums: []
    }
    componentWillReceiveProps(newProps) {
        axios.get("http://localhost:3001/api/albums/" + newProps.match.params.id + "?_embed=photos").then(response => {
            this.setState({
                photos: response.data.photos,
                albumName: response.data.name
            })

        })
        axios.get("http://localhost:3001/api/albums/").then(response => {
            this.setState({
                albums: response.data,
            })

        })
    }
    componentWillMount() {
        axios.get("http://localhost:3001/api/albums/" + this.props.match.params.id + "?_embed=photos").then(response => {
            this.setState({
                photos: response.data.photos,
                albumName: response.data.name
            })

        })
        axios.get("http://localhost:3001/api/albums/").then(response => {
            this.setState({
                albums: response.data,
            })

        })
    }
    render() {
        return(
            <div id="mainWrapperz">
                <div className="albumHeader">{this.state.albumName}</div>
                <div className="centerWrapper">
                <div id="sideBar">
                    <h1>Albums</h1>
                    {this.state.albums.map((item, i) => {
                        return (
                            <Link key={i} to={'/album/' + item.id}>
                        <p>{item.name}</p>
                        </Link>
                        )
                    })}
                </div>
                <div id="photos">
                {this.state.photos.map((item, i) => {
                    if (!item.url.includes('png')) {
                        return (
                            
                            <div className="photo" key={i}>
                            <Player
        playsInline
        src={item.url}
        fluid={false}
        width={276}
        height={200}
        />
        </div>
     
                        )
                    } else  {
                    return (
                        <Link to={'/slide/' + item.albumId}>
                    <div className="photo" key={i}>
                        <MDBView hover zoom>
                    <img src={item.url} alt=""></img>
                    <MDBMask overlay="red-strong">
                    </MDBMask>
                    </MDBView>
                    </div>
                    </Link>
                    )}
                })}
            </div>
            </div>
            </div>
        )
    }
}
export default Album