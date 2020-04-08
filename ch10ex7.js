const myImages = [
    "images/usa.png",
    "images/canada.png",
    "images/mexico.png",
    "images/jamaica.png"
];
// function to change image to random image
function changeImg(e) {
    let el = e.target;
    let newImgNumber = Math.round(Math.random() * 3);

    while (el.src.indexOf(myImages[newImgNumber]) != -1) {
        newImgNumber = Math.round(Math.random() * 3);
    }

    el.src = myImages[newImgNumber];
}
// function to tell what the image changed to as it is clicked
function updateStatus(e) {
    let el = e.target;
    let status = document.getElementById("status");

    status.innerHTML = "The image changed to " + el.src;


    // when mexico image displays the event listeners are removed. clicking no longer has any effect
    if (el.src.indexOf("mexico") > -1) {
        el.removeEventListener("click", changeImg);
        el.removeEventListener("click", updateStatus);
    }
}

// assigns an object to the image
let imgObj = document.getElementById("img0");

// makes clicking on the image run the functions until event listener is removed
imgObj.addEventListener("click", changeImg);
imgObj.addEventListener("click", updateStatus);