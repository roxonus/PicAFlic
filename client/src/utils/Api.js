import axios from "axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movie");
  },
  
  // Deletes the movie with the given id, if we want to add later
//   deleteMovie: function(id) {
//     return axios.delete("/api/movie/" + id);
//   },
  // Saves a movie to the database
  saveMovie: function(movieData) {
    return axios.post("/api/movie", movieData);
  }
};