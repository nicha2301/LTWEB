const body = document.querySelector('body')

document.addEventListener("click", e => {
    let currentColor = window.getComputedStyle(e.target).getPropertyValue('background-color')

    // body.setAttribute("style", "background-color: " + currentColor)
    body.style.backgroundColor = currentColor
})