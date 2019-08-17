var img = document.getElementById('img1');
img.onmouseover = function (ev) {
    console.log("单击");
    img.style.left = Math.floor(Math.random() * 1000)+"px";
    img.style.top = Math.floor(Math.random() * 500) + "px";
}
