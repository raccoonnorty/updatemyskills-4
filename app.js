const board = document.querySelector('#board')
const colors = [
    '#e74c3c',
    '#8e44ad',
    '#3498db',
    '#e67e22',
    '#2ecc71',
    '#727072',
    '#e6cfbf',
    '#ae7862',
    '#b18e2c',
    '#2b3120',
    '#503143',
    '#9a532b',
    '#c49b60',
    '#79ad9f',
    '#193439'
]
const SQUARES_NUMBER = 500



for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    board.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

    board.style.boxShadow = 'none'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}