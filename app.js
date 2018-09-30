/* Function for changing colors of technology bars */


function htmlFunction() {
    var x = document.getElementById('htmls');
    if (x.style.backgroundColor === 'red') {
        x.style.backgroundColor = 'blue';
    } else {
        x.style.backgroundColor = 'red';
    }
}


function cssFunction() {
    var x = document.getElementById('css2');
    if (x.style.backgroundColor === '#9900ff') {
        x.style.backgroundColor = '#b84dff';
    } else {
        x.style.backgroundColor = '#1f0033';
    }
}


function javascriptFunction() {
    var x = document.getElementById('javascript');
    if (x.style.backgroundColor === '#00ffff') {
        x.style.backgroundColor = '#b84dff';
    } else {
        x.style.backgroundColor = '#00ffff';
    }
}

function wordpressFunction() {
    var x = document.getElementById('wordpress');
    if (x.style.backgroundColor === '#ff66ff') {
        x.style.backgroundColor = '#ff00ff';
    } else {
        x.style.backgroundColor = '#ff66ff';
    }
}