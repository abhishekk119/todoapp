function main() {
  var paragraph = document.createElement("p");
  paragraph.innerText = document.getElementById("inputf").value + ".";
  document.getElementById("todocontainer").appendChild(paragraph);
  document.getElementById("inputf").value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    document.getElementById("todocontainer").removeChild(paragraph);
  });
}
