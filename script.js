const itens = document.getElementById('itens');
const burguer = document.getElementById('burguer');

function clickMenu() {
  itens.classList.toggle('active');
}

// Fecha o menu ao clicar em um item
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    itens.classList.remove('active');
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (event) {
  const isClickInsideMenu = itens.contains(event.target);
  const isClickOnBurguer = burguer.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurguer) {
    itens.classList.remove('active');
  }
});