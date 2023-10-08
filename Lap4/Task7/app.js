const container = document.querySelector('.container-btn')
const body = document.querySelector('body')
const size = document.querySelector('input')


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

    for (let i = 0; i < size.value; i++) {
        const wrapperButton = document.createElement('div')
        const button = document.createElement('button')
        button.classList.add('button')
        button.classList.add('disabled')
        button.classList.add('button-' + `${numbers[i]}`)
        button.innerText = `${numbers[i]}`
        button.style.backgroundColor = randomColor()
        button.addEventListener('click', e => {
            if (arr.includes(Number(e.target.innerText))) {
                arr.push(++count)
                e.target.style.display = 'none'
            } else {
                alert('Wrong')
            }
            //remove button when all buttons were removed
            if (arr.length == Number(size.value) + 1) {
                alert("Congratulations")
                //set original input after win the game
                size.value = ''

                let child = container.lastElementChild
                while (child) {
                    container.removeChild(child)
                    child = container.lastElementChild
                }
            }
        })
        container.appendChild(wrapperButton)
        wrapperButton.appendChild(button)
    }

}








