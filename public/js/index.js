
let score = document.getElementById('score');

let number = 0;
let bool = true;
setInterval(()=>{
    if (bool){
        number -= 1;
    }else {
        number += 1;
    }

    if (number < -300){
        bool = false;
    }
    if (number > 15) {
        bool = true;        
    }

    score.style.marginLeft = number + 'px';
},20);