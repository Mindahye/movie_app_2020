import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      {/* BrowserRouter로 쓸 수도 있는데 github에서 쓰기 별로라고 함..  */}
      <Navigation />
      {/* 네비게이션은 라우터 안에 있어야 함  Link to를 사용하려면..!
      footer는 없어두 되겠지.. link to로 변경되는게 아니니까*/}
      <Route path="/" exact={true} component={Home} />
      {/* exact는 path가 / 일때만 본다 */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
