const img = document.querySelector('.img')

var deg = 15

setInterval(() => {
    img.style= 'transform: rotate('+deg+'deg)'
    deg= deg + 15
}, 2000)