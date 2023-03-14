document.getElementById('body').innerHTML += "<div class='lang'></div>"
document.getElementById('body').innerHTML += "<div id='about' class='about'></div>"

document.getElementById('about').innerHTML += "<h2>генератор математических примеров</h2>"
document.getElementById('about').innerHTML += "<h3>press M1</h3>"


var mode = 0;

mode1 = document.getElementById('mode1').addEventListener('click', mode1)
mode2 = document.getElementById('mode2').addEventListener('click', mode2)
mode3 = document.getElementById('mode3').addEventListener('click', mode3)


function mode1() {
    
    document.getElementById('checkbox2').checked = true
    mode = 1
    count = 0

    document.getElementById('content').style.visibility = 'visible'
    mods = document.getElementById('mods').style.visibility = 'hidden';
    document.getElementById('menu_mods').style.visibility = 'visible'

    document.getElementById('levels').style.visibility = 'hidden'
    change()
}

function mode2() {
    mode = 2
    count = 0

    document.getElementById('content').style.visibility = 'visible'
    mods = document.getElementById('mods').style.visibility = 'hidden';
    document.getElementById('menu_mods').style.visibility = 'visible'

    document.getElementById('levels').style.visibility = 'hidden'
    change()
}

function mode3() {
    mode = 3
    count = 0

    document.getElementById('content').style.visibility = 'visible'
    mods = document.getElementById('mods').style.visibility = 'hidden';
    document.getElementById('menu_mods').style.visibility = 'visible'
    
    document.getElementById('levels').style.visibility = 'hidden'
    change()
}



buttonMenu = document.getElementById('menu_mods')
buttonMenu.addEventListener('click', menu)

function menu() {
    document.getElementById('mods').style.visibility = 'visible'
    document.getElementById('content').style.visibility = 'hidden'
    document.getElementById('menu_mods').style.visibility = 'hidden'

    document.getElementById('result').style.visibility = 'hidden'
    document.getElementById('levels').style.visibility = 'visible'
}



document.getElementById('about').addEventListener('mousedown', showMods)

function showMods() {
    document.getElementById('about').style.visibility = 'hidden'
    /* document.getElementById('result').style.visibility = 'visible' */
}



