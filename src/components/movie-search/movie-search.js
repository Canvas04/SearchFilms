class MovieSearch {
    _baseUrl = "https://api.themoviedb.org/3";
    api_key = "ac4255c06e52a841804866a58661de95";
  async getResourse(url1,url2,url3) {
    
    const res = await fetch(
      `${this._baseUrl}${url1}?api_key=${this.api_key}&${url2}&${url3}`
    );
    if (!res.ok) {
      throw new Error(`Movies not found , received ${res.status} `);
    }
    const body = await res.json();
    return body;
  }
  async getMovie(movie,num) {
      return this.getResourse('/search/movie',`query=${movie}`,`page=${num}`)
  }
  async getGenres() {
      return this.getResourse('/genre/movie/list')
  }
}
export default MovieSearch;