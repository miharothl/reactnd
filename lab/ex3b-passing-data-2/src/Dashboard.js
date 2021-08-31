import React, {Component} from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component
{
   render() {
       const {profiles, users, movies, moviesByUser}  = this.props;

       console.log(movies)

       const cards = Object.keys(movies).map(id => {

           const movieId = movies[id].id;
           const movieInfo = movies[id];
           const usersWhoLikedMovie = moviesByUser[id];

           console.log(movieId);
           console.log(movieInfo);
           console.log(usersWhoLikedMovie);
           console.log(users);

           return <MovieCard
               key = {movieId}
               info = {movieInfo}
               likedBy = {usersWhoLikedMovie}
               users = {users}
           />
       })

       /*
        Return JSX
        */
        return <ul>{cards}</ul>;

       // return (
       //     'dashboard'
       //     <ul>{cards}</ul>
       //)
   }
}

export default Dashboard;