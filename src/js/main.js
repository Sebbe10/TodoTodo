let addtodobutton = document.getElementById("addtodo");
let todocontainer = document.getElementById("todocontainer");
let inputField = document.getElementById("inputField");

addtodobutton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  todocontainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationColor = "red";
  });
  paragraph.addEventListener("dblclick", function () {
    todocontainer.removeChild(paragraph);
  });
});
