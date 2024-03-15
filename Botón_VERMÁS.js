const S1 = document.querySelectorAll('.S1');
const BotonVerMas = document.querySelectorAll('.BotonVerMas');

BotonVerMas.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    S1[index].classList.toggle('activo');
  });
});