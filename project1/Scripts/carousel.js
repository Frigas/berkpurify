
let index = 0;
function slide() {
    index = (index + 1) % 3;
    document.getElementById("carousel").style.transform = `translateX(-${index * 100}%)`;
}
setInterval(slide, 5000);
