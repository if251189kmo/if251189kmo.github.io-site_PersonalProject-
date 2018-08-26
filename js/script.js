window.onload = function () {
    openMenu();
}

function openMenu() {
    
    var toggleMenu = document.querySelector('.menuOpen'); // кнопка меню
    var menu = document.querySelector('.navigation'); // саме немю навігації

    toggleMenu.onclick = function () {
        
        if (menu.classList.contains("navigation")) {
            
            menu.classList.remove('navigation');
            menu.classList.add('activeNav');
            
            toggleMenu.classList.add('menuOpen-aktive');
            
            
            setTimeout(function(){ window.scrollTo( 0, 150 ) });


        }

        else {

            menu.classList.remove('activeNav');
            menu.classList.add('navigation');
            
            toggleMenu.classList.remove('menuOpen-aktive');
            
            setTimeout(function(){ window.scrollTo( 0, 0 ) });
            
        }                     
    };
};































