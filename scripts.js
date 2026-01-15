var socialLinksParents  = document.querySelectorAll(".popup-trans-bg");
var socialLinksChilden  = document.querySelectorAll(".floating-link-box");
var topLinks            = document.querySelectorAll(".link-box");


socialLinksChilden.forEach((child) => {
    child.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Add event listeners to each top link to show corresponding popup
topLinks.forEach((link) => {
    console.log(link.dataset.id);
    link.addEventListener("click", function() {
        document.getElementById(link.dataset.id).style.display = "flex"; // show the popup of the clicked link with matching id
    });
});

// Add event listeners to each popup background to hide on click
socialLinksParents.forEach((parent) => {
    parent.addEventListener("click", function() {
        parent.style.display = "none";
    });
});

