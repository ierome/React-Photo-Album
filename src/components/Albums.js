import React from 'react'
import '../styles/Albums.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Albums extends React.Component {
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/albums/").then(response => {
            this.setState({
                albums: response.data,
            })

        })
    }

    render() {
        return(
            <div id="mainWrapper">
                <div className="albumsBanner">
                    <h1>Stunt Team Albums</h1>
                </div>
                <div className="albums">
                    {this.state.albums.map((item, i) => {
                        return (
                            <Link to={`/album/` + item.id} key={item.id}>
                            <div className="album">
                    <img src={item.coverPhoto} alt=""></img>
                    <div className="albumName">
                    <h1>{item.name}</h1>
                    </div>
                    </div>
                    </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Albums