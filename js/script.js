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

            setTimeout(function(){ window.scrollTo( 0, 130 ) });           
        }

        else {

            menu.classList.remove('activeNav');
            menu.classList.add('navigation');
            
            toggleMenu.classList.remove('menuOpen-aktive');
            
            setTimeout(function(){ window.scrollTo( 0, 0 ) });
        }                     
    };
};





//querySelector( '.navigate-right' ).classList.remove( 'enabled' );



















/*
function openMenu() {
    document.querySelector('.menuOpen').onclick = function () {
        
        if (document.querySelector('.navigation').style.display == "block") {
            document.querySelector('.navigation').style.display = "none";
            document.querySelector('.menuOpen').style.background = "green";
        }
        
        else {
            document.querySelector('.navigation').style.display = "block";
            document.querySelector('.menuOpen').style.background = "red";
        }
            
    }
}

function openMenu() {
    document.querySelector('.menuOpen').onclick = function () {
        
        if (document.querySelector('.navigation').style.display == "block") {
            document.querySelector('.navigation').style.display = "none";
        }
        
        else {
            document.querySelector('.navigation').style.display = "block";
        }
            
    }
}





Window.onload = function () {
    
    var menuItem = document.querySelectorAll('.navigation .menuItem');

    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].onclick = function () {
            var open = this.parentNode.children[1];

            if (open.style.display == 'block') {
                open.style.display == 'none';
            }
            else {
                open.style.display = 'block';
            }
        }
        
    }
}

*/