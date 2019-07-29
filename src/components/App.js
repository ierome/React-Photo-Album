import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Albums from './Albums'
import Album from './Album'
import Slideshow from './Slideshow'

class App extends React.Component {
  componentDidMount() {
    // axios.get("/albums").then(resp => {
    //   console.log(resp.data)
    // })
  }

  render() {
    return (
     <Router>
       <Route exact path="/" component={Albums}></Route>
       <Route path="/album/:id" component={Album}></Route>
       <Route path="/slide/:id" component={Slideshow}></Route>
     </Router>
    )
  }
}

export default App