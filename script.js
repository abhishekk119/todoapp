var date = new Date();
var displayDate = date.toLocaleDateString();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function main() {
  if (document.getElementById("inputField").value === "") {
    //checks whether the input field is empty
    alert("Add a task first."); //if empty, the page prompts to add task first
  } else {
    var div = document.createElement("div"); //creates this div dynamically on button click
    div.style.width = "750px";
    div.style.height = "40px";
    div.style.padding = "15px";
    div.classList = "bg-primary m-2"; //Adding div style properties
    div.style.fontFamily = "monospace";
    div.style.fontSize = "25px";
    div.style.margin = "5px";
    div.style.marginLeft = "relative";

    var paragraph = document.createElement("p"); //creates this paragraph <p> dynamically on button click
    paragraph.innerText =
      "•" +
      " " +
      document.getElementById("inputField").value +
      "." +
      "\xa0" +
      "Edited:" +
      hour +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      displayDate; //Paragraph text is input field value
    paragraph.style.marginTop = "-11px";
    document.getElementById("inputField").value = ""; //Making the input field empty
    div.appendChild(paragraph); //Append the Paragraph to the Div
    document.getElementById("todo").appendChild(div); //Append the Div to the body

    div.addEventListener("click", function () {
      //When the div is clicked, paragraph text toggles between
      //line-through or none.
      if (paragraph.style.textDecoration === "line-through") {
        paragraph.style.textDecoration = "none";
      } else {
        paragraph.style.textDecoration = "line-through";
      }
    });

    div.addEventListener("dblclick", function () {
      //When the div is double clicked, paragraph gets deleted
      document.getElementById("todo").removeChild(div);
    });
  }
}
