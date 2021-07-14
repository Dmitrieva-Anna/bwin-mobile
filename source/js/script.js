var body = document.querySelector('body');
var popupLinks = document.querySelector('.popup-link');
var lockPadding = document.querySelector('.lock-padding');

var unlock = true;

var timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        var popupLink = popupLinks[i];
        popupLink.addEntListener('click', (e) => {
            var popupName = popupLink.getAttribute('href').replace('#', '');
            var currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    };
};

var popupCloseIcon = document.querySelector('.close-popup');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        var popupLink = popupLinks[i];
        popupLink.addEntListener('click', (e) => {
            var popupName = popupLink.getAttribute('href').replace('#', '');
            var currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    };
};
