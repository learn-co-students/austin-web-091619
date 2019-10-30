document.addEventListener("DOMContentLoaded", main);

function main(){
    // on click, fetch for info of pokemon with ID of user_input
    // "https://pokeapi.co/api/v2/pokemon/1/"
    let form = document.querySelector("#poke-form");

    form.addEventListener("submit", submissionHandler);

}

function submissionHandler(e){
    e.preventDefault();
    // find the textbox in the form!
    let userInput = document.querySelector("#user-input");
    let pokeID = userInput.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // 1
            let pokeName = data.name;
            let paragraph = document.querySelector("#pokemon-name");
            paragraph.innerText = pokeName;
        })


}



//3

let a = 1
function example(){
//2
    function ex2(){
        // 1
        console.log(a)
    }


}
