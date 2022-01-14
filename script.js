const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9780cbf534ea0aacb533c842fcc6a2e2&page=1"
  const IMG_PATH = "https://image.tmdb.org/t/p/w500"
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=9780cbf534ea0aacb533c842fcc6a2e2&query='"


    getMovies(API_URL)

  async function getMovies(url) {
      const res = await fetch(url)
      const data= await res.json()

      console.log(data.results)
  }
