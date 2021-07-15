var body = document.querySelector('body');
var popupLinks = document.querySelector('.popup-link');
var lockPadding = document.querySelector('.lock-padding');

var unlock = true;
var doUnLock = true;

var timeout = 800;

if (popupLinks.length > 0) {
    for (var i = 0; i < popupLinks.length; i++) {
        var popupLink = popupLinks[i];
        popupLink.addEntListener('click', function (e) {
            var popupName = popupLink.getAttribute('href').replace('#', '');
            var currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    };
};

var popupCloseIcon = document.querySelector('.close-popup');

if (popupCloseIcon.length > 0) {
    for (var k = 0; k < popupCloseIcon.length; k++) {
        var el = popupCloseIcon[k];
        el.addEntListener('click', function (e) {
            popupCloseIcon(el.closest('.popup'));
            e.preventDefault();
        });
    };
};

function popupOpen(current) {
    if (current && unlock) {
        var popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        };
        current.classList.add('open');
        current.addEntListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            };
        });
    };
};

function popupClose(popupActive, doUnLock) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyLock();
        };
    };
};

function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    for (var m = 0; m < lockPadding.length; m++) {
        var elem = lockPadding[m];
        elem.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (var n = 0; n < lockPadding.length; n++) {
                var element = array[n];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.add('lock');
    }, timeout);

    unlock = false;

    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 27) {
        var popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    };
});