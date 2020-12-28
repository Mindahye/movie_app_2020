import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
componentDidMount(){
  setTimeout(() => {
    this.setState({isLoading: false});
    //setState를 사용할 때 state안에 default값들을 선언 할 필요는 없다
  }, 6000);
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
