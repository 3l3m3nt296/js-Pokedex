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
      number: 3,
  
     
    },
    {
      name: 'MBisaflor',
      height: 2,
      types: ['plant','poison'],
      number:4
     
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
  document.write('<br>' + '<h1>' + pokemon.name + '</h1>' + ` (height: ${pokemon.height}) `);
  //Conditional loop; checks if height is greater than 5.
  if (pokemon.height > 1) {
    document.write('- WOW that\'s a big boy!');
  }
  //Add line break after each Pokemon.
  document.write('<br>')
});


  // unordered list format
document.write('<ul>');

// List each Pokemon on the html page
for (let i = 0; i < pokemonList.length; i++){
  document.write('<li>');
    // Include name and height
    document.write(pokemonList[i].name + ' (height ' + pokemonList[i].height + ')');
    // If height is over 1m, write "Wow, That is big!"
    if (pokemonList[i].height > 0,5) document.write(' - Wow, that\'s big! ');
  document.write('</li>');
}

document.write('</ul>');



