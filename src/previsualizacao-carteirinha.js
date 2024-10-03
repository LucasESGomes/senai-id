// Inputs
const nomeInput = document.getElementById('nome-input');
const rgInput = document.getElementById('rg-input');
const dataNascimentoInput = document.getElementById('data-nascimento-input');
const cursoInput = document.getElementById('curso-input');
const matriculaInput = document.getElementById('matricula-input');
const carteirinha_pfp_input = document.getElementById('carteirinha-pfp-input');

// Elementos da pré-visualização da carteirinha
const nomePrevisu = document.getElementById('nome_previsu');
const rgPrevisu = document.getElementById('rg_previsu');
const matriculaPrevisu = document.getElementById('matricula_previsu');
const dataNascimentoPrevisu = document.getElementById('data_nascimento_previsu');
const cursoPrevisu = document.getElementById('curso_previsu');
const carteirinhaPFP = document.getElementById('carteirinha-pfp')


nomeInput.addEventListener('keydown', ()=>{
    nomePrevisu.innerHTML = nomeInput.value.trim()
})

rgInput.addEventListener('keydown', ()=>{
    rgPrevisu.innerHTML = rgInput.value.trim()
})

matriculaInput.addEventListener('keydown', ()=>{
    matriculaPrevisu.innerHTML = matriculaInput.value.trim()
})

dataNascimentoInput.addEventListener('focusout', ()=>{
    dataNascimentoPrevisu.innerHTML = dataNascimentoInput.value
})

cursoInput.addEventListener('keydown', ()=>{
    console.log('key')
    cursoPrevisu.innerHTML = cursoInput.value.trim()
})

carteirinha_pfp_input.addEventListener('change', ()=>{
    console.log(carteirinha_pfp_input.files)
})