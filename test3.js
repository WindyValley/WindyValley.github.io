function img1_mouseover() {
    var img = document.getElementById("img1");
    img.style.left = Math.floor(Math.random() * 1000)+"px";
    img.style.top = Math.floor(Math.random() * 500 + 20) + "px";
}
function flushdate_mouseclick() {
    var date = document.getElementById("date");
    date.innerHTML = Date();
}
