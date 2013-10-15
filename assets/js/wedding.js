var imageArray = [];
var numImages = 30;

var imageCache = function(prefix, startNum, endNum) {
    for (var i = 1; i <= numImages; i++) {
            img = new Image();
            img.src = prefix + i + ".jpg";
            imageArray.push(img.src);
        }
}

var photoCache = new imageCache('./assets/img/photos/gallery/gallery-', 1, numImages);

var output1 = '';
output1 += '<div class="tile">'
output1 += '<img class="gallery" src='

var output2 = '';
output2 += '>';
output2 += '</div>'

function writeOut(array) {
    for (var i = 0; i < array.length; i++) {
        document.write(output1 + array[i] + output2);
        }
    }
