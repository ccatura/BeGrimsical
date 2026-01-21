var socialLinksParents  = document.querySelectorAll(".popup-trans-bg");
var socialLinksChilden  = document.querySelectorAll(".floating-popup-box");
var topLinks            = document.querySelectorAll(".links-box-outer-contatiner");

// Email elements
var goodToGo            = document.getElementById('good-to-go');
var goodToGoInput       = document.getElementsByName('good-to-go');
var sendEmailButton     = document.getElementById('send-email');



// var tempSwitch = document.getElementById('temp-switch');
// tempSwitch.addEventListener('click', function() {
//     // 1. Get the computed style of the root
//     const rootStyle = getComputedStyle(document.documentElement);
//     const currentBorder = rootStyle.getPropertyValue('--frame-borders');

//     if (currentBorder === '0px') {
//         document.documentElement.style.setProperty('--frame-borders', '1px');
//     } else {
//         document.documentElement.style.setProperty('--frame-borders', '0px');
//     }
// });



goodToGo.addEventListener('click', function() {
    if (goodToGo.checked == false) {
        goodToGoInput[0].value = true;
        sendEmailButton.disabled = false;
    } else {
        goodToGoInput[0].value = false;
        sendEmailButton.disabled = true;
    }
});


// Clears the answers to the form once the submit button is clicked
// clickEmailModal.addEventListener('click', function() {
//     showEmailModal();
//     emailName[0].value = '';
//     emailEmail[0].value = '';
//     emailMessage[0].value = '';
//     goodToGo.checked = true;
// });


socialLinksChilden.forEach((child) => {
    child.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Add event listeners to each top link to show corresponding popup
topLinks.forEach((link) => {
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


