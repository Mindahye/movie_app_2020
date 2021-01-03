import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    //렌더가 먼저 실행된 후에 componentDidMount가 실행됨을 잊지말아야~
    //그렇기때문에 return 전에 if문으로 한번 더 체크
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
