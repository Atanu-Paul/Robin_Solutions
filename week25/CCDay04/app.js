putElement = (n) => {
  for (let i = 1; i <= n; i++) {
    var childElement = document.createElement("div");
    childElement.className = "child";
    var message = document.createTextNode(`Child Element No: ${i}`);
    childElement.appendChild(message);
    document
      .querySelector(".parent")
      .appendChild(childElement)
      .insertAdjacentHTML("afterend", "<br/>");
  }
};

putElement(10);
