
// features:
// When <event>, do <some type of fetch>, and <manipulate DOM>
// When PageLoads, GET fetch /pokemons, add all pokemon to the page
// When SubmitForm, POST fetch /pokemons, pokemon added to list
// When ClickPokemonCard, DELETE fetch /pokemons/:id , remove pokemon card from list

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM loaded')

  gottaFetchEmAll();
  initializeForm();
});

function initializeForm(){
    // grab our DOM elements (form)
    let form = document.querySelector("form");

    // build for eventHandling
    form.addEventListener("submit", handleFormSubmission)
}

function handleFormSubmission(e) {
    e.preventDefault();
    // get user's input data
    let nameInput = document.getElementById("name-input").value;
    let spriteInput = document.getElementById("sprite-input").value;

    // bundle it up and send it to server
    let formData = {
        name: nameInput,
        sprite: spriteInput
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch("http://localhost:3000/pokemons", configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(newPokemon){
        // display it (DOM Manipulation)

        renderPokemon(newPokemon)
    })

}

function gottaFetchEmAll(){
  fetch("http://localhost:3000/pokemons")
  .then(function(response) { return response.json()})
  .then(function(pokemonsArray){
    pokemonsArray.forEach(renderPokemon)
  })
}

function renderPokemon(pokemonObj){
    // initialize pokemon div, with "card" class
    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card")
    pokemonCard.id = `pokemon-${pokemonObj.id}`;

    // work on the header for the card
    let pokemonHeader = document.createElement("h3");
    pokemonHeader.innerText = pokemonObj.name

    // work on sprite
    let pokemonImage = document.createElement("img")
    pokemonImage.src = pokemonObj.sprite


    // add h3, img to the card
    pokemonCard.append(pokemonHeader, pokemonImage)
    // pokemonCard.appendChild(pokemonHeader)
    // pokemonCard.appendChild(pokemonImage)

    // add card to container (container is already on the page)
    let pokemonContainer = document.querySelector("#pokemon-container")
    pokemonContainer.appendChild(pokemonCard)
}
