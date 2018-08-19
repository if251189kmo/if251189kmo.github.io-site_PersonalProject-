window.onload = function () {
    openMenu();
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





















/*

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