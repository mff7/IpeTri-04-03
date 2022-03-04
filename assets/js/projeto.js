const projeto1 = document.querySelector(".projeto1")
const projeto2 = document.querySelector(".projeto2")
const projeto3 = document.querySelector(".projeto3")
const projeto4 = document.querySelector(".projeto4")
const texto1 = document.querySelector(".texto1")
const texto2 = document.querySelector(".texto2")
const texto3 = document.querySelector(".texto3")
const texto4 = document.querySelector(".texto4")
const imagem1 = document.querySelector(".imagem1")
const imagem2 = document.querySelector(".imagem2")
const imagem3 = document.querySelector(".imagem3")
const imagem4 = document.querySelector(".imagem4")

projeto1.addEventListener('click', () => {

    texto1.classList.toggle("projetos__texto-ativo")
    imagem1.classList.toggle("projetos__imagem-ativo")

})
projeto2.addEventListener('click', () => {

    texto2.classList.toggle("projetos__texto-ativo")
    imagem2.classList.toggle("projetos__imagem-ativo")

})
projeto3.addEventListener('click', () => {

    texto3.classList.toggle("projetos__texto-ativo")
    imagem3.classList.toggle("projetos__imagem-ativo")

})
projeto4.addEventListener('click', () => {

    texto4.classList.toggle("projetos__texto-ativo")
    imagem4.classList.toggle("projetos__imagem-ativo")

})