function main() {
  if (document.getElementById("inputField").value === "") {
    //checks whether the input field is empty
    alert("Add a task first."); //if empty, the page prompts to add task first
  } else {
    var div = document.createElement("div"); //creates this div dynamically on button click
    div.style.width = "700px";
    div.style.height = "40px";
    div.style.padding = "15px";
    div.classList = "alert alert-info"; //Adding div style properties
    div.style.fontFamily = "monospace";
    div.style.fontSize = "25px";
    div.style.margin = "9px";
    div.style.marginLeft = "220px";
    div.style.boxShadow = "5px 5px #888888";
    var paragraph = document.createElement("p"); //creates this paragraph <p> dynamically on button click
    paragraph.innerText =
      "•" + " " + document.getElementById("inputField").value + "."; //Paragraph text is input field value
    paragraph.style.marginTop = "-11px";
    document.getElementById("inputField").value = ""; //Making the input field empty
    div.appendChild(paragraph); //Append the Paragraph to the Div
    document.getElementById("todo").appendChild(div); //Append the Div to the body
    var dt = new Date();
    document.getElementById("showEditingTime").innerHTML = "Edited On:" + dt;

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
      //When the div is double clicked, the div gets deleted
      document.getElementById("todo").removeChild(div);
    });
  }
}
