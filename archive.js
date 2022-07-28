window.setInterval(shootPea, 3000);
window.setInterval(moveBullet, 10);

function shootPea() {
  for (const i of plantLists) {
    var newImage = document.createElement("img");
    newImage.setAttribute("src", "./images/pea.png");
    newImage.setAttribute("class", "pea");
    newImage.style.left = i[0] + 34 + "px";
    newImage.style.top = i[1] + 5 + "px";
    newImage.width = newImage.height = 30;
    document.body.appendChild(newImage);
    bulletLists.push(newImage);
  }
}
function moveBullet() {
  if (document.hasFocus()) {
    for (const i of bulletLists) {
      i.style.left = i.offsetLeft + 1 + "px";
      if (i.offsetLeft > endY) {
        //hide i
        i.style.display = "none";
      }
    }
    for (const i of bulletLists)
      for (const zombie of zombieLists)
        if (ifHit([parseInt(i.style.left), parseInt(i.style.top)], [zombie.x, zombie.y])) {
          zombie.takeDamage(10);
          i.style.display = "none";
        }
  }
}
