import React, {Component} from 'react'
import TrackList from '../components/Tracks'

class TrackContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      const request = new XMLHttpRequest();
      request.open('GET', url);

      request.addEventListener("load", () => {
        if (request.status !== 200) return;
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({data: data})
      });

      request.send();
    }

  render(){
    return(
      <div className='top-twenty'>
        <h1> Top 20 </h1>
        <TrackList />

      </div>
    )
  }
}


export default TrackContainer
