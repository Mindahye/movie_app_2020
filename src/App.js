import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();
  }
  //render 하면 호출되는 Life cycle method => componetDidMount
  render(){
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
      );
    }
  }
  
  export default App;
  
  //axios는 fetch 위에 있는 작은 layer라고 생각하면됨..
  //axios는 느릴 수 있기 때문에 componentdidmount에 함수가 끝날때까지 시간이 걸린다는걸 알려야함