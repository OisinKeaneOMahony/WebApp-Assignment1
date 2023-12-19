# Assignment 1 - ReactJS app.

Name: Oisin Keane O'Mahony

## Overview.

Web App Development 2's React project, which replicates the functionality of popular movie websites such as Netflix and IMDB.

### Features.
 
+ Now Playing movies page
+ Filter movies by genre
+ Search movies by name
+ Favorite movies page
+ Must Watch movies page
+ Trending movies page
+ Token API, store user token and allow them to login

## Setup requirements.
+ ```
+ $ npm install.
+ ```

## API endpoints.

+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gets a list of similar movies using the movie ID
+ https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - Get movies now paying in cinemas
+ https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY} - Get trending movies

## Routing.

+ /signin - Sign in page.
+ /movies/trending - Trending movies page.
+ /movies/now-playing - Movies in cinemas now page.
+ /movies/:id/similar - Similar movies page.
