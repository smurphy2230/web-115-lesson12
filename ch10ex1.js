var myImages = [ 
    "images/usa.png",
    "images/canada.png",
    "images/jamaica.png",
    "images/mexico.png"
];
function changeImg(that) {
    var newImgNumber = Math.round(Math.random() * 3);

    while (that.src.indexOf(myImages[newImgNumber]) != -1) {
        newImgNumber = Math.round(Math.random() * 3);
    
    }

    that.src = myImages[newImgNumber];
}