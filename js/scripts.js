let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let searchInput = document.querySelector("#search-bar");

  function add(pokemon) {
    // Validation of item
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else alert("pokemon is not correct");
  }
  // function to return list
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-outline-warning", "btn-lg");
    button.setAttribute("data-target", "#show-modal");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("style", "color: #4b0082");

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
   loadDetails(pokemon).then(function () {
     showModal(pokemon);
   });
 }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.abilities = details.abilities;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }


  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');

    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');
  

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElementHeight = document.createElement('p');
    contentElementHeight.innerText = "Height: " + pokemon.height;
    let contentElementImage = document.createElement('img');
    contentElementImage.src = pokemon.imageUrlFront;

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElementHeight);
    modal.appendChild(contentElementImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    console.log(pokemon)

  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
    
  });
  

  function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}
  window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
  window.addEventListener('click' ,(e) => {
   let modalContainer = document.querySelector('#modal-container');
   let modal = document.querySelector('modal')
   if (modalContainer.classList.contains('is-visible') && e.target != modal)
   hideModal() 
  }
 );


 //add event listener to search bar
  searchInput.addEventListener("input", function () {
    let listPokemon = document.querySelectorAll("li");
    //let listPokemon = $('li');
    let value = searchInput.value.toUpperCase();

    listPokemon.forEach(function (pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
        pokemon.style.display = "";
      } else {
        pokemon.style.display = "none";
      }
    });
  });

  // return all functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

