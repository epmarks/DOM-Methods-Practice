let bodyElement = document.querySelector("body");

let mainElement = document.createElement("main");

let imageElement = document.createElement("img");
imageElement.class = "image";
imageElement.src =
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png";

let buttonElement = document.createElement("button");
buttonElement.id = "removeButton";
buttonElement.innerText = "Remove Main";

let restoreElement = document.createElement("button");
restoreElement.id = "restoreButton";
restoreElement.innerText = "Restore Main";

let anchorElement = document.createElement("a");
anchorElement.class = "link";
anchorElement.href = "https://www.miniaturemarket.com/";
anchorElement.innerHTML = "Buy A Board Game!";

let removeInput = document.createElement("input");
removeInput.id = "removeInput";
removeInput.placeholder = "Enter a class to remove";

let removeInputButton = document.createElement("button");
removeInputButton.id = "removeInputButton";
removeInputButton.innerText = "Remove Class";

let addDivInput = document.createElement("input");
addDivInput.id = "addInput";
addDivInput.placeholder = "Enter text to add to the page";

let addTextButton = document.createElement("button");
addTextButton.id = "addTextButton";
addTextButton.innerText = "Add Text";

bodyElement.append(buttonElement);
bodyElement.append(restoreElement);
bodyElement.append(removeInput);
bodyElement.append(removeInputButton);
bodyElement.append(addDivInput);
bodyElement.append(addTextButton);
bodyElement.append(mainElement);
mainElement.append(imageElement);
mainElement.append(anchorElement);

let remove = document.querySelector("#removeButton");
let restore = document.querySelector("#restoreButton");
let removeClass = document.querySelector("#removeInputButton");
let addText = document.querySelector("#addTextButton");

remove.addEventListener("click", function () {
  mainElement.remove();
});

restore.addEventListener("click", function () {
  bodyElement.append(mainElement);
});

//Below was my mode of thinking when it came to the Remove Button for Stretchy 1.

// removeClass.addEventListener("click", function () {
//   arr = ["image", "link", "button", "input"];
//   i = 0;
//   while (i < arr.length) {
//     if (removeInput.value === arr[0]) {
//       imageElement.remove();
//     } else if (removeInput.value === arr[1]) {
//       anchorElement.remove();
//     }
//     i++;
//   }
// });
