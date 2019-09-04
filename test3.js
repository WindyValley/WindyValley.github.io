var winHeight = document.documentElement.clientHeight;
var winWidth = document.documentElement.clientWidth;
var x = 0;
var y = 0;
function img1_mouseover() {
    var img = document.getElementById("img1");
    img.style.left = Math.floor(Math.random() * (winWidth - 400)) + "px";
    img.style.top = Math.floor(Math.random() * (winHeight - 320) + 20) + "px";
}
function flushdate_mouseclick() {
    var date = document.getElementById("date");
    date.innerHTML = Date();
}
function keydown(event) {
    var block = document.getElementById("movblock");
    if (event.keyCode == 37 || event.keyCode == 65) {
        x -= 2;
        if (x < 0) {
            x = 0;
        }
        block.style.left = x + "px";
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        y -= 2;
        if (y < 0) {
            y = 0;
        }
        block.style.top = y + "px";
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        x += 2;
        if (x > (winWidth - 50)) {
            x = winWidth - 50;
        }
        block.style.left = x + "px";
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        y += 2;
        if (y > (winHeight - 50)) {
            y = winHeight - 50;
        }
        block.style.top = y + "px";
    }
}
