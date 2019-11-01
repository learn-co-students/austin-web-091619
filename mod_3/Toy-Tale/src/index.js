let addToy = false
const URL="http://localhost:3000"
// when the page loads
    // - if the DOM Object that we want to work with is in our HTML blueprint
// when something is added to the page


document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

  fetchAllToys();
  initializeForm();

})
let globalVariable = null;

function initializeForm(){
    let form = document.querySelector("#add-toy-form");
    form.addEventListener("submit", handleFormSubmission)
}

function handleFormSubmission(e){
    e.preventDefault();
    // console.log("submitting....")
    let toyName = document.querySelector("#toy-name").value;
    let toyImage = document.querySelector("#toy-image").value;

    let formData = {
        name: toyName,
        image: toyImage
    }

    fetch(URL + "/toys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(function(resp){
        return resp.json();
    })
    .then(function(newToy){
        // render this toy alongside the others
        renderToy(newToy)
    })
}









// when <DOMContentLoaded>, GET fetch /toys, display all toys
function fetchAllToys(){
    fetch("http://localhost:3000/toys")
        .then(function(response){ return response.json();})
        .then(function(toysArr){
            // debugger
            toysArr.forEach(renderToy);
        });
    // debugger
}

function renderToy(toyObj){
    // build toy card:
    let card = document.createElement("div");
    card.className = "card";
    card.id = toyObj.id;

    // build card's header:
    let h2 = document.createElement("h2");
    h2.innerText = toyObj.name;
    // append header to card:
    card.appendChild(h2);

    // build card's img:
    let img = document.createElement("IMG");
    img.src = toyObj.image
    img.className = "toy-avatar";
    // append img to card:
    card.appendChild(img);

    // build card's "likes" paragraph:
    let likesParagraph = document.createElement("p");
    // likesParagraph.id = `likes-${toyObj.likes}`
    likesParagraph.innerText = toyObj.likes;
    // append likesParagraph to card:
    card.appendChild(likesParagraph);

    // build card's "likes" button:
    let likeButton = document.createElement("button");
    likeButton.className = "like-btn";
    likeButton.innerText = "Like <3";
    // likeButton.id = toyObj.id

    // add likes functionality
    likeButton.addEventListener("click", handleLikesClick)

    // append button to card:
    card.appendChild(likeButton);

    // grab the toy-collection container
    let container = document.getElementById("toy-collection");
    // append the card to it
    container.appendChild(card);
}

function handleLikesClick(e){
    // increase the like count for ___this__ toy
    // we need to identify this toy
    let id = e.target.parentElement.id;
    // get the current like count
    let currentLikeCount = parseInt(e.target.parentElement.querySelector("p").innerText);
    // increase it by 1
    let newCount = currentLikeCount + 1;

    fetch(URL + `/toys/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ likes: newCount })
    })
    .then(function(res){
        return res.json();
    })
    .then(function(x){
        // pessimistic / conditional
        globalVariable = x
        e.target.parentElement.querySelector("p").innerText = newCount;
    })
    .catch(function(x){
        alert("Server had trouble, please try again later");
    })
    debugger
}
