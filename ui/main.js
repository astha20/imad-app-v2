console.log('Loaded!');

//change text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//move the image
var element = document.getElementById('madi');
var marginLeft = 0;
function movrRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
}