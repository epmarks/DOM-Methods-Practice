let bodyElement = document.querySelector("body");

let mainElement = document.createElement("main");

let imageElement = document.createElement("img");
imageElement.class = "image";
imageElement.src =
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png";

let buttonElement = document.createElement("button");
buttonElement.id = "removeButton";
buttonElement.innerText = "Remove";

let anchorElement = document.createElement("a");
anchorElement.class = "link";
anchorElement.href = "https://www.miniaturemarket.com/";
anchorElement.innerHTML = "Buy A Board Game!";

bodyElement.append(buttonElement);
bodyElement.append(mainElement);
mainElement.append(imageElement);
mainElement.append(anchorElement);

let remove = document.querySelector("#removeButton");

remove.addEventListener("click", function () {
  mainElement.remove();
});
