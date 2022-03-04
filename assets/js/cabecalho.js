const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {

    if (window.scrollY > 300 && window.scrollY < 2400) {
        cabecalho.classList.add('cabecalho--fixo');
    } else {
        cabecalho.classList.remove('cabecalho--fixo');
    }
})


