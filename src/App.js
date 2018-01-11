import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }

  // 컴포넌트가 마운트된 후에 실행되는 라이프사이클 메서드
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    console.log(this.state.movies);
    // key 값은 index를 사용하지 않는것이 좋다 (왜? Why? 느리니까...)
    const movies = this.state.movies.map((movie, index) => (
        <Movie title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis} />
    ));
    return movies;
  }

  // 영화 목록을 가져오는 함수
  _getMovies = async () => {
    const movies = await this._callApi(); // 데이터를 받아올 때까지 대기
    this.setState({
      movies
    })
  }

  // API 호출
  _callApi = () => {
    // AJAX 사용 : Fetch를 사용하면 url을 Ajax로 불러올 수 있다.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
                .then(response => response.json())  // response를 json 객체로 변환
                .then(json => json.data.movies)
                .catch(err => console.log(err))
  }



  // 랜더링
  render() {
    const {movies} = this.state;
    return (
      <div className={ movies? "App" : "App--loading"}>
        { movies ? this._renderMovies() : 'Loading...' }
      </div>
    );
  }
}

export default App;
