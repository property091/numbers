
level1 = document.getElementById('level1').addEventListener('click', level1)
level2 = document.getElementById('level2').addEventListener('click', level2)
level3 = document.getElementById('level3').addEventListener('click', level3)

document.getElementById('level2').style.marginTop += '20px'

function level1() {
    document.getElementById('level1').style.color = 'rgb(192, 124, 255)'
    document.getElementById('level2').style.color= 'aliceblue'
    document.getElementById('level3').style.color= 'aliceblue'
    valueForNum1 = 20
    valueForNum2 = 10
    
}

function level2() {
    document.getElementById('level1').style.color = 'aliceblue'
    document.getElementById('level2').style.color= 'rgb(192, 124, 255)'
    document.getElementById('level3').style.color= 'aliceblue'

    valueForNum1 = 200
    valueForNum2 = 100
}

function level3() {
    document.getElementById('level1').style.color = 'aliceblue'
    document.getElementById('level2').style.color= 'aliceblue'
    document.getElementById('level3').style.color= 'rgb(192, 124, 255)'

    valueForNum1 = 1000
    valueForNum2 = 500
}



result = document.getElementById('result')
document.getElementById('stats').addEventListener('click', showStats)

function showStats() {
    if (document.getElementById('result').style.visibility == 'visible') {
        document.getElementById('result').style.visibility = 'hidden'
    }
    else {
        document.getElementById('result').style.visibility = 'visible'
    }
    
}
