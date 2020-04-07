console.log("it works");

function linkClick() {
    alert ("this goes nowhere");
    return false;
}

document.getElementById("someLink").onclick = linkClick;