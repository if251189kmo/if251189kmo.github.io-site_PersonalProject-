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