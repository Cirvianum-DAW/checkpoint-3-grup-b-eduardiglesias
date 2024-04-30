// Afegeix aquí el codi de JS per a la pàgina pokemon.html
function getMovieInfo(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/{id or name}/`)
      .then((res) => res.json())
      .then((movie) => ({
        id: movie.title,
        name: movie.episode_id,
        height: movie.characters,
        weight: movie.director,
        habilitats: [
            movie.release_date
        ],
        sprites: [
            movie.release_date
        ]
      }));
  }