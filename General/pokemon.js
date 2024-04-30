// Afegeix aquí el codi de JS per a la pàgina pokemon.html
function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        habilitats: [ 
          pokemon.abilities
        ],
        sprites: [
          pokemon.sprites
        ]
      }));
  }

  console.log(getPokemon("bulbasaur"))

  const pokemon = getPokemon(1);
  const pokemonName = pokemon
  console.log(pokemonName)

  const nameElement = document.getElementById("name");

  nameElement.value = pokemonName;
