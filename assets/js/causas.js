const desmatamento = document.querySelector(".desmatamento")
const desmatamentoTexto = document.querySelector(".causas__texto-desmatamento")
const preservacao = document.querySelector(".preservacao")
const preservacaoTexto = document.querySelector(".causas__texto-preservacao")
const concientizacao = document.querySelector(".concientizacao")
const concientizacaoTexto = document.querySelector(".causas__texto-conceintizacao")

desmatamento.addEventListener('click', () => {

    preservacao.classList.toggle("causas__texto")
    concientizacao.classList.toggle("causas__texto")
    desmatamento.classList.toggle("causas__lista-item--ativo")
    desmatamentoTexto.classList.toggle("causas__texto--ativo")
})
preservacao.addEventListener('click', () => {

    desmatamento.classList.toggle("causas__texto")
    concientizacao.classList.toggle("causas__texto")
    preservacao.classList.toggle("causas__lista-item--ativo")
    preservacaoTexto.classList.toggle("causas__texto--ativo")
})
concientizacao.addEventListener('click', () => {

    desmatamento.classList.toggle("causas__texto")
    preservacao.classList.toggle("causas__texto")
    concientizacao.classList.toggle("causas__lista-item--ativo")
    concientizacaoTexto.classList.toggle("causas__texto--ativo")
})