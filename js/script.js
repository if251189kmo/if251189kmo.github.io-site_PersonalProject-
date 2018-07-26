Window.onload = function () {
    
    var asks = document.querySelectorAll('.item .ask');

    for (var i = 0; i < asks.length; i++) {
        asks[i].onclick = function () {
            var answer = this.parentNode.children[1];

            if (answer.style.display == 'block') {
                answer.style.display == 'none';
            }
            else {
                answer.style.display = 'block';
            }
        }
        
    }
}