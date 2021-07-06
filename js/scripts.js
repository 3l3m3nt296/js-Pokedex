// Pokemon data to display in app.
let pokemonRepository = (function () {
  const pokemonList = [
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
  // returns an array of all the Pokemon in pokemonList
  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }
  return {
    getAll: getAll,
    add: add,
  };
})();

document.write("<ul>");
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write("<li>");
  document.write(
    "<h3>" +
      pokemon.name +
      "</h3>" +
      `(types: ${pokemon.types})` +
      `(height: ${pokemon.height})`
  );
  if (pokemon.height > 1) document.write(" - Wow, that's big! ");
  document.write("</li>");
});
document.write("</ul>");

      




  


 


