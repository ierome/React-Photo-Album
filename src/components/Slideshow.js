import React from 'react';
import axios from 'axios'
import '../styles/slideshow.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Slideshow extends React.Component {

    state = {
        photos: [],
        albumName: ''
    }
componentWillMount() {
    axios.get("http://localhost:3001/api/albums/" + this.props.match.params.id + "?_embed=photos").then(response => {
        this.setState({
            photos: response.data.photos,
            albumName: response.data.name
        })
    })
}

 
render(){
    return (
        <div id="bodyz">
        <div id="slideWrap">
        <Carousel width={500 + 'px'}>
            {this.state.photos.map((item) => {
                    return( <div>
                        <img src={item.url} />
                    </div>
        )
               })}
</Carousel>
</div>
</div>
    )
}
}
export default Slideshow