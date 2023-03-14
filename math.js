counter = document.getElementById('count');
button = document.getElementsByClassName('button');
block = document.getElementsByClassName('block');

/* console.log(mode) */

addEventListener('keypress', (event) => {
    const name = event.key;
    //alert(name) 
    if (name == "s" || name == "ы") {
        change()
    }
});



var s; //сравнение ответа


var count = 97;
var globalCount = 0;

//math

var valueForNum1 = 20;
var valueForNum2 = 10;

var globalX;
var globalY;

var CheckArea = true;
var pos = 0;

//color
var visibleColor = 1;


function change() {

    visibleColor = 1;
    counter.innerHTML = count
    area = document.getElementsByClassName('area');

    if (CheckArea) {
        //СОЗДАНИЕ БЛОКОВ В AREA
        document.getElementById('content').innerHTML += "<div class='area' id='" + pos + "'></div>"
        
    
        for (var i = 0; i <= 4; i++) {
            area[pos].innerHTML += "<div class='block' id='" + pos + `${i}` + "j" + "'></div>"
        }
        CheckArea = false;
    }
    
    

    //CLASS AREA POSITION ON WIN
    area = document.getElementById(`${pos}`);

    xPos = getRandomInt(80);
    yPos = getRandomInt(80);

    if (globalX == xPos || globalY == yPos) {
        xPos += 20
        yPos -= 20

        area.style.right = xPos + "%";
        area.style.top = yPos + "px"; 
    }
    else {
        area.style.right = xPos + "%";
        area.style.top = yPos + "%"; 
    }
    

    globalX = xPos
    globalY = yPos

    //INPUT BOX
    //+ j это id блоков внутри area
    document.getElementById(`${pos}` + 4 + "j").innerHTML = "<input class='box' type='number' onchange=answer(this.value) id='box" + pos + "'></input>"
    var box = document.getElementById("box" + `${pos}`);
    box.focus()

    //ИЗМЕНЕНИЕ ЦВЕТА БЛОКОВ
    
    for (var i = pos; i >= 0; i--) {
        var posArea = i;
        visibleColor -= 0.1;

        /* console.log(pos) */
        for (var j = 0; j <= 4; j++) {
            block = document.getElementById(`${posArea}` + j + "j")

            var color = `${block.style.color}`;
            color = color.slice(0, 18);

            if (mode == 3) {
                color = 'rgb(240, 248, 255,'
            }

            if (j == 4) {
                color = color.replace(')', ',')
                color += visibleColor + ')'

                /* console.log(color) */
                block.style.color = color
            }
            
            else {
                block.style.color = 'rgba(240, 248, 255,' +  visibleColor + ')';
            }
        }
    }
    block = document.getElementsByClassName('block');

    /* for (var i = 0; i <= 4; i++) {
        block = document.getElementById(`${pos}` + i);
        block.style.color = 'rgba(240, 248, 255,' +  visibleColor + ')';
        //console.log(block)
        
    }
    block = document.getElementsByClassName('block'); */



    //СЛУЧАЙНЫЕ ЦИФРЫ
    rndInd = getRandomInt(4)
    var d = ["+", "-", ":", "x"]

    num1 = getRandomInt(valueForNum1)
    num2 = getRandomInt(valueForNum2)

    if (d[rndInd] == ":") {
        if (num2 == 0) {
            num2 += 1
        }

        k = num1 * num2
        
        s = k / num2
        num1 = k
    }

    else if (d[rndInd] == "+") {
        s = num1 + num2
    }

    else if (d[rndInd] == "-") {
        s = num1 - num2
    }

    else if (d[rndInd] == "x") {
        s = num1 * num2
    }


    //ВСТАВКА ЦИФР
    document.getElementById(`${pos}0j`).innerHTML = num1;
    document.getElementById(`${pos}1j`).innerHTML = d[rndInd];
    document.getElementById(`${pos}2j`).innerHTML = num2;
    document.getElementById(`${pos}3j`).innerHTML = "=";
    //document.getElementById(`${pos}4`).innerHTML = s;


    //pos++;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function answer(value) {
    console.log(mode)

    if (value == s) {
        /* console.log(true) */
        count += 1
        globalCount += 1

        document.getElementById('result2').innerHTML = " Всего:      " + globalCount
        document.getElementById('mode1_result').innerHTML = "Свободный режим:     " + count
        
    }

    else if (mode == 3) {
        
        counter.innerHTML = count;
        /* alert('вы решили: ' + count); */
        if (counter.innerHTML > count) {
            document.getElementById('mode2_result').innerHTML = "Без ошибок:     " + count
        }

        document.getElementById('result').style.visibility = 'visible'
        return;
    }
    console.log(valueForNum1)
    if (mode == 2 && count >= 100) {
        
        counter.innerHTML = count;
        /* alert('100!!!!!!!'); */
        document.getElementById('result2').innerHTML = " Всего:      " + (globalCount + count)

        if (valueForNum1 == 20) {
            document.getElementById('checkbox1').checked = true
            console.log('111')
        }

        else if (valueForNum1 == 200) {
            document.getElementById('checkbox2').checked = true
            console.log('222')
        }

        else if (valueForNum1 == 1000) {
            document.getElementById('checkbox3').checked = true
            console.log('333')
        }
        document.getElementById('result').style.visibility = 'visible'
        return;
    }

    document.getElementById("box" + `${pos}`).remove
    document.getElementById(`${pos}` + 4 + "j").innerHTML = value
    //alert(value)

    if (value == s) {
        document.getElementById(`${pos}4j`).style.color = 'rgb(60, 179, 113)'; 
    }

    else {
        document.getElementById(`${pos}4j`).style.color = 'rgb(220, 20, 60)';
    }

    counter.innerHTML = count
    CheckArea = true;
    
    pos++;
    change()
}
