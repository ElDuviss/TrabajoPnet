/* Cuando pulso el .Menu_Hamburgesa le pongo y le quito la clase activo a nav1 (En js se le llama TOGGLE 'activo')*/
const BH = document.querySelector('.Menu_Hamburgesa1')
const nav1 = document.querySelector('.nav1')
BH.addEventListener('click', () => {
    nav1.classList.toggle('activo')
})