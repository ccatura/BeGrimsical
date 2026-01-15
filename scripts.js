var socialLink = document.getElementById("social");
var socialLinksPopUp = document.getElementById("social-links");


socialLink.addEventListener("click", function() {
    if (socialLinksPopUp.style.display === "flex") {
        socialLinksPopUp.style.display = "none";
    } else {
        socialLinksPopUp.style.display = "flex";
    }
});
