var socialLinksParents  = document.querySelectorAll(".popup-trans-bg");
var socialLinksChilden  = document.querySelectorAll(".floating-popup-box");
var topLinks            = document.querySelectorAll(".links-box-outer-contatiner");

// Email elements
var goodToGo            = document.getElementById('good-to-go');
var goodToGoInput       = document.getElementsByName('good-to-go');
var sendEmailButton     = document.getElementById('send-email');

var inputsToClear       = document.querySelectorAll('[data-id="clear-me"]');


// After a short delay, this hides the contact popup after clicking send email so the form can be seen being submitted
sendEmailButton.addEventListener('click', function() {
    setTimeout (function() {
        document.getElementById('contact').style.display = "none";
    }, 2000);
});


// Enables or disables the send email button based on the checkbox
goodToGo.addEventListener('click', function() {
    if (goodToGo.checked == false) {
        goodToGoInput[0].value = true;
        sendEmailButton.disabled = false;
    } else {
        goodToGoInput[0].value = false;
        sendEmailButton.disabled = true;
    }
});

// Prevent click events on popup content from propagating to the background
socialLinksChilden.forEach((child) => {
    child.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Add event listeners to each top link to show corresponding popup
topLinks.forEach((link) => {
    link.addEventListener("click", function() {
        document.getElementById(link.dataset.id).style.display = "flex"; // show the popup of the clicked link with matching id
        if (link.dataset.id === "contact") {
            clearInputs(); // Clear input fields when contact popup is opened
        };
    });
});

// Add event listeners to popup background to hide on click
socialLinksParents.forEach((parent) => {
    parent.addEventListener("click", function() {
        parent.style.display = "none";
    });
});

// Function to clear all input fields with the specified data-id
function clearInputs() {
    inputsToClear.forEach(element => {
        element.value = "";
    });
}







var tempSwitch = document.getElementById('temp-switch');
tempSwitch.addEventListener('click', function() {
    // 1. Get the computed style of the root
    const rootStyle = getComputedStyle(document.documentElement);
    const currentBorder = rootStyle.getPropertyValue('--frame-borders');

    if (currentBorder === '0px') {
        document.documentElement.style.setProperty('--frame-borders', '1px');
    } else {
        document.documentElement.style.setProperty('--frame-borders', '0px');
    }
});


