const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach((link) => {
    link.onclick = function (e) {
    const item = link.closest('.menu__item');
    if (!item) return;

    const subMenu = item.querySelector('.menu_sub');

    if (!subMenu) return;

    e.preventDefault();

    const mainMenu = item.closest('.menu_main');
    if (mainMenu) {
        const activeSubs = mainMenu.querySelectorAll('.menu_sub.menu_active');
        activeSubs.forEach((m) => {
        if (m !== subMenu) m.classList.remove('menu_active');
        });
    }

    subMenu.classList.toggle('menu_active');
    };
});