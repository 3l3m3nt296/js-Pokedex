let pokemonRepository = (function () {
let pokemonList = [
    {
      name: 'Bulbasur',
      height: 0.7,
      types: ['plant','poison'],
      number: 1,
     
    },
    {
      name: 'Bisaknosp',
      height: 1.0,
      types: ['plant','poison'],
      number: 2,
  
     
    },
    {
      name: 'MBisaflor',
      height: 2,
      types: ['plant','poison'],
      number:3
     
    }
  ];

  function getAll() {
    return pokemonList;
  }
  function add(item) {
    pokemonList.push(item);
  }
  return {
    getAll: getAll,
    add: add
  };
})();
pokemonRepository.getAll().forEach(function(pokemon) {
  // Display looped Pokémon on the DOM, with a line break.
  document.write('<br>' + '<li>' + pokemon.name + '</li>' + ` (height: ${pokemon.height}) `);
  //Conditional loop; checks if height is greater than 5.
  if (pokemon.height > 1) {
    document.write('- WOW that\'s a big boy!');
  }
  document.write('</ul>');
  
});


 


