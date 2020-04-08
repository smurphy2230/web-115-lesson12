function handleEvent(e) {

    let target = e.target;

    switch (e.type) {
        case "mouseover":
            if (target.className == "tabStrip-tab") {
                target.className = "tabStrip-tab-hover";
            }
            break
        case "mouseout":
            if (target.className == "tabStrip-tab-hover") {
                target.className = "tabStrip-tab";
            }
            break
        case "click":
            if (target.className == "tabStrip-tab-hover"){
            target.className = "tabStrip-tab-click";
            let num = target.getAttribute("data-tab-number");

            showDescription(num);
            }
            break
    }
}

function showDescription(num) {
    let text = "Description for tab " + num;

    descContainer.innerHTML = text;

}

document.addEventListener("mouseover", handleEvent);
document.addEventListener("mouseout", handleEvent);
document.addEventListener("click", handleEvent);