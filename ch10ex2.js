const myImages = [
    "images/usa.png",
    "images/canada.png", 
    "images/mexico.png",
    "images/jamaica.png"
];

function changeImg(e) {
    let el = e.target;
        let newImgNumber = Math.round(Math.random() * 3);

        while (el.src.indexOf(myImages[newImgNumber]) != -1) {
            newImgNumber = Math.round(Math.random() * 3);
        }
        el.src = myImages[newImgNumber];
    }
