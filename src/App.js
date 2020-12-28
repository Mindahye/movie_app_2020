import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   console.log("hello");
  // }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }; 
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }; 
  componentDidMount(){
    console.log("Component rendered");
  }
  componentDidUpdate(){
    console.log("I just update");    
  }
  componentWillUnmount(){//거의 안 쓰이는데... 니꼬쌤은 동작도 못 찾았다
    //아!!! vs코드에서 저장을 눌러서 자동으로 로컬페이지가 끊겼다가 켜질때 호출됨
    console.log("Goodbye, Cruel world");
  }
  render(){
    console.log("Im rendering");
    return (
      <div>
        <h1>The number is: { this.state.count }</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div> 
    );
  }
}
//test
//render를 돌고 component rendered > 업데이트 실행이 되면 렌더링> update
//
export default App;
