
let score = document.getElementById('score');



const btn = document.getElementById('btn')
btn.addEventListener("touchstart", e => {
    click()
})
// btn.addEventListener("click", e => {
//     click()
// })

let number = 0;
let bool = true;
let time = null;
function click() {
    if (time) {
        clearInterval(time);
        time = null;
        return;
    }

    time = setInterval(() => {
        if (bool) {
            number -= 1;
        } else {
            number += 1;
        }

        if (number < -300) {
            bool = false;
        }
        if (number > 15) {
            bool = true;
        }

        score.style.marginLeft = number + 'px';
    }, 20);
}

