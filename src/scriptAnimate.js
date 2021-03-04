import {getDataSix,getDataAll} from './application.js';

const button1 = document.querySelector('.menu-toggle');
const button2 = document.querySelector('.sec5 button');

button1.addEventListener('click', function() {
     const navMob = document.querySelector('nav ul');

     navMob.classList.toggle('animate-nav');
})

button2.addEventListener('click', function() {
     const sectionBox = document.querySelector('.sec4');

     sectionBox.appendChild(getDataAll());

     button2.style.display = 'none';
})

function addCommas(nStr){
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

export {addCommas};