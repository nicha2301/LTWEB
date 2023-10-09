const container = document.querySelector('.container-btn')
const gameover = document.querySelector('.fail')
const body = document.querySelector('body')
const size = document.querySelector('input')
const step = document.querySelector('.tutorial-step')
const chances = document.querySelector('.chance')

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomNum(max, min) {
    let arr = [];
    let x;
    for (let i = 0; i < max; i++) {
        x = Math.floor(Math.random() * max) + min;
        if (arr.includes(x) == true) {
            i = i - 1;
        } else {
            if (x > max == false) {
                arr.push(x);
            }
        }
    }
    return arr;
}


function handleEvent() {
    const numbers = randomNum(size.value, 1);
    let count = 1
    let arr = [1]
    let chance = 3

    //create button
    for (let i = 0; i < size.value; i++) {
        const wrapperButton = document.createElement('div')
        const button = document.createElement('button')
        button.classList.add('button')
        button.classList.add('disabled')
        button.classList.add('button-' + `${numbers[i]}`)
        button.innerText = `${numbers[i]}`
        button.style.backgroundColor = randomColor()
        button.addEventListener('click', e => {

            //remove button when click it
            if (arr.includes(Number(e.target.innerText))) {
                arr.push(++count)
                e.target.style.display = 'none'
                //tutorial next step
                step.innerText = `Next step: ${arr[arr.length - 1]}`

            } else {
                alert('Wrong')
                //remaining chances
                chances.innerText = `Remaining opportunities: ${chance - 1}`
                chance = chance - 1
                if (chance == 0) {
                    gameover.style.display = 'flex'
                }
            }

            //remove wrapper button when all buttons were removed
            if (arr.length == Number(size.value) + 1) {
                alert("Congratulations")
                CleanUpField()
            }
        })
        container.appendChild(wrapperButton)
        wrapperButton.appendChild(button)
    }

}

function CleanUpField() {
    //set original value input after win the game
    size.value = ''
    //set original value tutorial
    step.innerText = ''
    //set original value remaining opportunities
    chances.innerText = ''

    let child = container.lastElementChild
    while (child) {
        container.removeChild(child)
        child = container.lastElementChild
    }
}

function playAgain() {
    gameover.style.display = 'none'
    CleanUpField()
}







