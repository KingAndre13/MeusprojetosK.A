var ecom = document.body.querySelector('div#ecom')
var exec = document.body.querySelector('div#exec')
var fami = document.body.querySelector('div#fami')

ecom.addEventListener ('mouseenter', tocar1)
exec.addEventListener ('mouseenter', tocar2)
fami.addEventListener ('mouseenter', tocar3)

ecom.addEventListener ('mouseout', destocar1)
exec.addEventListener ('mouseout', destocar2)
fami.addEventListener ('mouseout', destocar3)


function tocar1() {
    ecom.style.backgroundColor = 'green'
}

function tocar2() {
    exec.style.backgroundColor = 'green'
}

function tocar3() {
    fami.style.backgroundColor = 'green'
} 

function destocar1() {
    ecom.style.backgroundColor = '#0077b6'
}

function destocar2() {
    exec.style.backgroundColor = '#0077b6'
}

function destocar3() {
    fami.style.backgroundColor = '#0077b6'
}