// Pokemon data to display in app.
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasur",
      height: 0.7,
      types: ["plant", "poison"],
      number: 1,
    },
    {
      name: "Bisaknosp",
      height: 1.0,
      types: ["plant", "poison"],
      number: 2,
    },
    {
      name: "MBisaflor",
      height: 2,
      types: ["plant", "poison"],
      number: 3,
    },
  ];

  // Returns an array of all the Pokemon in pokemonList
  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");

    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

  //Console Log the pokemon's name on click
  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});