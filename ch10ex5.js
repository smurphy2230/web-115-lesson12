let link = document.getElementById("someLink");

link.addEventListener("click", function(e) {
    alert("this link goes nowhere");

    e.preventDefault()
});