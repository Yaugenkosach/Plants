// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const menuLinks = document.querySelectorAll('.header-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    })
    if(window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
            });
        }
    }
}());

(function () {
    document.querySelectorAll('.prices-accordeon-section').forEach(function(section) {
        section.addEventListener('click', function(event) {
            
            if (event.target.closest('.prices-accordeon-section').classList.contains('opened')) {
                section.classList.remove('opened');
              return;
            } else {
                document.querySelectorAll('.prices-accordeon-section').forEach(function(section) {
                    section.classList.remove('opened')
                })

            event.target.closest('.prices-accordeon-section').classList.add('opened')
            return
        }
        })
    })

}())


(function () {
    const contactsAccordeon = document.querySelector('.contacts-accordeon');
    contactsAccordeon.addEventListener('click', () => {
        if (contactsAccordeon.classList.contains('active')) {
            contactsAccordeon.classList.remove('active');
        } else {
            contactsAccordeon.classList.add('active');
        }

    });
    
}());




function CanandaiguaOpen() {
    document.querySelector('.NewYork').classList.remove('cityopen');
    document.querySelector('.Yonkers').classList.remove('cityopen');
    document.querySelector('.Sherrill').classList.remove('cityopen');
    document.querySelector('.canandaigua').classList.add('cityopen');
    document.querySelector('.contacts-accordeon').classList.add('cityopen-acc');
    document.querySelector('.contacts-accordeon-text').innerHTML = 'Canandaigua, NY';
};

function NewYorkOpen() {
    document.querySelector('.canandaigua').classList.remove('cityopen');
    document.querySelector('.Yonkers').classList.remove('cityopen');
    document.querySelector('.Sherrill').classList.remove('cityopen');
    document.querySelector('.NewYork').classList.add('cityopen');
    document.querySelector('.contacts-accordeon').classList.add('cityopen-acc');
    document.querySelector('.contacts-accordeon-text').innerHTML = 'New York City';
};

function YonkersOpen() {
    document.querySelector('.canandaigua').classList.remove('cityopen');
    document.querySelector('.NewYork').classList.remove('cityopen');
    document.querySelector('.Sherrill').classList.remove('cityopen');
    document.querySelector('.Yonkers').classList.add('cityopen');
    document.querySelector('.contacts-accordeon').classList.add('cityopen-acc');
    document.querySelector('.contacts-accordeon-text').innerHTML = 'Yonkers, NY';
};

function SherrillOpen() {
    document.querySelector('.canandaigua').classList.remove('cityopen');
    document.querySelector('.NewYork').classList.remove('cityopen');
    document.querySelector('.Yonkers').classList.remove('cityopen');
    document.querySelector('.Sherrill').classList.add('cityopen');
    document.querySelector('.contacts-accordeon').classList.add('cityopen-acc');
    document.querySelector('.contacts-accordeon-text').innerHTML = 'Sherrill, NY';
};


function gardenBlur() {

    if (document.querySelector('.button-gardens').classList.contains('service-button-active')) {
        document.querySelector('.button-gardens').classList.remove('service-button-active');
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else if (document.querySelector('.button-planting').classList.contains('service-button-active') && document.querySelector('.button-lawn').classList.contains('service-button-active')) {
        document.querySelectorAll('.service-button').forEach(function(section) {
            section.classList.remove('service-button-active')
        });
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else {
        document.querySelector('.button-gardens').classList.add('service-button-active');
        document.querySelectorAll('.Garden').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
        document.querySelectorAll('.Planting').forEach(function(section) {
        section.classList.add('service-item-blur')
        });
        document.querySelector('.lown').classList.add('service-item-blur');
    }

    
};

function plantingBlur() {

    if (document.querySelector('.button-planting').classList.contains('service-button-active')) {
        document.querySelector('.button-planting').classList.remove('service-button-active');
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else if (document.querySelector('.button-gardens').classList.contains('service-button-active') && document.querySelector('.button-lawn').classList.contains('service-button-active')) {
        document.querySelectorAll('.service-button').forEach(function(section) {
            section.classList.remove('service-button-active')
        });
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else {
        document.querySelector('.button-planting').classList.add('service-button-active');
        document.querySelectorAll('.Planting').forEach(function(section) {
            section.classList.remove('service-item-blur')
            });
        document.querySelectorAll('.Garden').forEach(function(section) {
            section.classList.add('service-item-blur')
            });
        document.querySelector('.lown').classList.add('service-item-blur');
    }
};

function lownBlur() {

    if (document.querySelector('.button-lawn').classList.contains('service-button-active')) {
        document.querySelector('.button-lawn').classList.remove('service-button-active');
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else if (document.querySelector('.button-gardens').classList.contains('service-button-active') && document.querySelector('.button-planting').classList.contains('service-button-active')) {
        document.querySelectorAll('.service-button').forEach(function(section) {
            section.classList.remove('service-button-active')
        });
        document.querySelectorAll('.service-item').forEach(function(section) {
            section.classList.remove('service-item-blur')
        });
    } else {
        document.querySelector('.button-lawn').classList.add('service-button-active');
        document.querySelector('.lown').classList.remove('service-item-blur');
        document.querySelectorAll('.Garden').forEach(function(section) {
        section.classList.add('service-item-blur')
        });
        document.querySelectorAll('.Planting').forEach(function(section) {
        section.classList.add('service-item-blur')
        });
    }

    
};