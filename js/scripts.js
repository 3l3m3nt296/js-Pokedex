let pokemonRepository = (function()  {
let pokemonList = [
    {
      name: 'Bulbasur',
      types: ['plant','poison'],
      height: 0.7,
    },
    {
      name: 'Bisaknosp',
      types: ['plant','poison'],
      height: 1.0,
    },
    {
      name: 'MBisaflor',
      types: ['plant','poison'],
      height: 2,
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Ren' });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "height : " + pokemon.height + "" + pokemon.type + "</br>");
});

/* for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + "- Height: " + pokemonList[i].height)
  console.log(pokemonList[i].name + " Height: " + pokemonList[i].height)
if ([pokemonList[i].height] < 0.5) {
  document.write(" - This Pokemon is SMOL!")
}
 document.write("<br>");
} */

/*pokemonList.forEach(function(pokemon){
  console.log(pokemon);
});*/
