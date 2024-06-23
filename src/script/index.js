const menu = document.querySelector(".fa-solid")
const listMenu = document.querySelector(".hidden")
const crossMenu = document.querySelector(".fa-xmark")
const body = document.querySelector('body')
const transparent = document.createElement('div')


menu.addEventListener('click', () => {
    listMenu.classList.toggle('hidden')
    transparent.classList.toggle('transparent')
    body.prepend(transparent)
})

crossMenu.addEventListener('click', () => {
    listMenu.classList.toggle('hidden')
})