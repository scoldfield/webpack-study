var sub = require("./sub");
var app = document.createElement("div");
var main = require("./main.css");

app.innerHTML = "<h1>Hello world!</h1>";
app.appendChild(sub());
document.body.appendChild(app);