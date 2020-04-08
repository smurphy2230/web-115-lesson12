function handleEvent(e) {
    let target = e.target;
    let type = e.type;


    if (target.tagName == "P") {
        if (type == "mouseover") {
            target.className = "underline";
        } else if (type == "mouseout") {
            target.className = "";
        }
    }

    if (type == "click") {
        alert ("You clicked the mouse button at the X: " + e.clientX + "and Y: " + e.clientY + "coordinates.");
    }
}

document.addEventListener("mouseover", handleEvent);
document.addEventListener("mouseout", handleEvent);
document.addEventListener("click", handleEvent);