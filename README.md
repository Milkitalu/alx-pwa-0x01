## API Overview
   The MoviesDatabase API provides access to a wide range of movie data, including details about movies, actors, directors, and genres. It allows users to search for movies, retrieve detailed information, and access various movie-related data points.

## Version
   The current version of the MoviesDatabase API is v1.0.

   ## Available Endpoints
   - `/movies`: Retrieve a list of movies.
   - `/movies/{id}`: Retrieve detailed information about a specific movie.
   - `/actors`: Retrieve a list of actors.
   - `/actors/{id}`: Retrieve detailed information about a specific actor.

   ## Request and Response Format
   ### Request
json { "method": "GET", "url": "/movies", "headers": { "Authorization": "Bearer YOURAPIKEY" } }
   ### Response
json { "status": 200, "data": [ { "id": 1, "title": "Inception", "director": "Christopher Nolan", "release_year": 2010 }, … ] }

## Authentication To authenticate your requests, include an API key in the request headers:
   {
     "Authorization": "Bearer YOUR_API_KEY"
   }

## Error Handling
   Common error responses include:
   - `401 Unauthorized`: Invalid API key.
   - `404 Not Found`: The requested resource could not be found.
   - `500 Internal Server Error`: An error occurred on the server.

## Usage Limits and Best Practices
   - **Rate Limits**: The API allows up to 1000 requests per hour.
   - **Best Practices**: Cache responses where possible to reduce the number of API calls.

