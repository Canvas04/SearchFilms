class MovieSearch {
    _baseUrl = "https://api.themoviedb.org/3";
    api_key = "ac4255c06e52a841804866a58661de95";
  async getResourse(url1,url2) {
    
    const res = await fetch(
      `${this._baseUrl}${url1}?api_key=${this.api_key}&${url2}`
    );
    if (!res.ok) {
      throw new Error(`Movies not found , received ${res.status} `);
    }
    const body = await res.json();
    console.log(body);
    return body;
  }
  async getMovie(movie) {
      return this.getResourse('/search/movie',`query=${movie}`)
  }
  async getGenres() {
      return this.getResourse('/genre/movie/list')
  }
}
export default MovieSearch;