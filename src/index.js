const BASE_URL = 'http://localhost:3000/movies';

function getMovies(){
    return fetch(`${BASE_URL}/movies`)
    .then(response => response.json())
}

function getMoviesById(id){
    return fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
}

const newMovie = {
    title: "Harry Potter",
    director: "Somebody",
    genres: [
        "Fantastic"
    ],
    rating: 10
}

function postMovies(newMovie) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    }
    return fetch(`${BASE_URL}`,options)
    .then(res=>res.json)
}
postMovies(newMovie)

