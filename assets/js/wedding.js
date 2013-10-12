//function imageCache(array, base, firstNum, lastNum) {
    //var img;
    //for (var i = firstNum; i <= lastNum; i++) {
        //img = new Image();
        //img.src = base + i + ".jpg";
        //this.cache.push(img);
    //}
//}

var imageArray = [];
var numImages = 7;

var imageCache = function(prefix, startNum, endNum) {
    for (var i = 1; i <= 7; i++) {
            img = new Image();
            img.src = './assets/img/photos/FAVS-'+ i + ".jpg";
            imageArray.push(img.src);
        }
}

var photoCache = new imageCache('./assets/img/photos/FAVS-', 1, numImages);

var output1 = '';
output1 += '<div class="tile">'
output1 += '<img src='

var output2 = '';
output2 += '>';
output2 += '</div>'

function writeOut(array) {
    for (var i = 0; i < array.length; i++) {
        document.write(output1 + array[i] + output2);
        }
    }
