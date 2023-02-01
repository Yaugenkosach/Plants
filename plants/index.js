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

