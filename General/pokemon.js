// Afegeix aquí el codi de JS per a la pàgina pokemon.html
function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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

  function setPokemonInfo(id, name, height, weight) {
    try {
      // Obtenim els elements del DOM amb `querySelector` i els emmagatzemem en una variable
      const nameElement = document.getElementById(name);
      const heightElement = document.querySelector(height);
      const weightElement = document.querySelector(weight);
  
      // Obtenim la informació de la pel·lícula cridant al mètode de `swapi.js`
      const pokemonInfo = getPokemon(id);

      console.log(pokemonInfo)
  
      // Substituïm les dades fent servir un mètode de reemplaçament com `innerHTML`
      nameElement.innerHTML = pokemonInfo.name;
      heightElement.innerHTML = pokemonInfo.height;
      weightElement.innerHTML = pokemonInfo.weight;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  setPokemonInfo(1, 'name', 'height', 'weight');
