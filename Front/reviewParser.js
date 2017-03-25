var button = document.createElement("button");
button.innerHTML = "Tell me what I typed!";

var body = document.getElementsByTagName("body")[0];

var textField = document.createElement("INPUT");
textField.setAttribute("type", "text");

body.appendChild(textField);
body.appendChild(button);


button.addEventListener ("click", function() {
	alert("The text field contains: " + textField.value);
});

