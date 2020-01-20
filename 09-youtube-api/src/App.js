import React from 'react';
import './App.css';
import youtubeAPI from './configs/youtube';
import Search from './components/Search';
import Videolist from './components/Videolist';
import Videodetails from './components/Videodetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: false,
      selectedVideo: false
    }
  }

  componentDidMount = () => {
    this.searchVideo("funny cats");
  }

  searchVideo = async text => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: text
      }
    });
    const resp = response.data.items;
    const videos = [];


    resp.map(video => {
      videos.push({
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.default.url,
        thumbnail_width: video.snippet.thumbnails.default.width,
        thumbnail_height: video.snippet.thumbnails.default.height
      });
    })

    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    })
    //console.log()
    //console.log("state: ", this.state.videos);
  }

  onVideoSelect = (id) => {
    const videos = this.state.videos;
    const selectedVideo = videos.find(el => el.id === id);
    this.setState({
      selectedVideo: selectedVideo
    })
  }

  render() {
    return (
      <div className="App container px-5 pb-5">
        <div className="py-3">
          <h1 className="m-0 p-0 text-danger font-weight-bold">MyTube</h1>
        </div>
        <Search search={this.searchVideo} />
        <div className="row">
          <div className="col-8">
            <Videodetails video={this.state.selectedVideo} />
          </div>
          <div className="col-4">
            {this.state.videos && <Videolist select={this.onVideoSelect} videos={this.state.videos} />}
            
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
