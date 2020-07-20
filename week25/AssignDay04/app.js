putElement = () => {
  var imgClass = document.createElement("div");
  imgClass.className = "image";

  var imgTag = document.createElement("img");
  imgTag.src = "https://goo.gl/kjzfbE";
  imgTag.alt = "img";
  imgClass.appendChild(imgTag);

  var removeBut = document.createElement("button");
  removeBut.className = "remove btn btn-danger";
  removeBut.innerText = "Remove";
  imgClass.appendChild(removeBut);

  var holder = document.querySelector(".holder");
  holder.appendChild(imgClass);
};

putElement();

document.querySelector(".addImage").addEventListener("click", putElement);

$(".holder").on("click", ".remove", (e) => {
  const holder = document.querySelector(".holder");
  const div = document.querySelector(".image");
  holder.removeChild(div);
});
