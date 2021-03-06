import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  //react에서는 state를 갖기 위해 class component를 가질 필요가 없다
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    //ES6에서는 movies.data.data.movies이걸 위와 같이 선언.. wow
    //this.setState({movies:movies})
    //앞의 movies는 setState / 뒤는 axios 아래처럼 movies 한번만 써도 사용가능
    this.setState({
      movies,
      isLoading: false,
    });
  };
  componentDidMount() {
    this.getMovies();
  }

  //render 하면 호출되는 Life cycle method => componetDidMount
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> Loading... </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id} //키값은 유일한 값
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

//axios는 fetch 위에 있는 작은 layer라고 생각하면됨..
//axios는 느릴 수 있기 때문에 componentdidmount에 함수가 끝날때까지 시간이 걸린다는걸 알려야함
