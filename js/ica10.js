// Click to change the image

var image = document.getElementById('Image');

image.addEventListener('click', function(){
        changeImage();
    });

function changeImage(){
        image.src = '/img/ollie_1.JPG';
    }

//change text color onclick

var textElement = document.getElementById('intro_text');

textElement.addEventListener('click', function() {
    changeTextColor();
});

function changeTextColor() {
    textElement.style.color = 'red';
}