const input = document.querySelector(".input");
const btn = document.getElementById("cRbtn");
const notes = document.querySelector(".notes-content");

function savenotes(){
  localStorage.setItem("data",notes.innerHTML);
}
function shownotes(){
  notes.innerHTML=localStorage.getItem("data");
}
// shownotes();
function createNotes() {
  let p = document.createElement("p");
  let img = document.createElement("img");
  p.className = "input";
  p.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  notes.appendChild(p).appendChild(img);
  savenotes();
  // shownotes();
}

notes.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    savenotes();
  } 

})
function savenotes(){
  localStorage.setItem("data",notes.innerHTML);
}
function shownotes(){
  notes.innerHTML=localStorage.getItem("data");
}
shownotes();
btn.addEventListener("click", createNotes);