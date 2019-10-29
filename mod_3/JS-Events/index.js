console.log("connected?");

let logButton = document.querySelector("#log-button");
function logButtonCB(){
    console.log("clicked Middle Button");
}

logButton.addEventListener("click", logButtonCB);

let commentForm = document.querySelector("#comment-form");
// debugger

function formSubmissionCB(event){
    event.preventDefault();
    // console.log("submitting!");
    // 1. grab the input field
    let inputTag = document.querySelector("#new-comment");
    // 2. grab the comment (text) from the input field
    let commentText = inputTag.value;
    // 3. put the text in the comment-list
    let commentList = document.querySelector("#comments-list");
    let listItem = document.createElement("li");
    listItem.innerText = commentText;
    commentList.appendChild(listItem);
}

commentForm.addEventListener("submit", formSubmissionCB );
