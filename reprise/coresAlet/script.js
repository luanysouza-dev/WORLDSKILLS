let botao = document.querySelector('.botao')
let cores = [ 
    'yellow',
    'red',
    'blue',
    'pink'
]
let butao = document.querySelector('.butao')
let bnt = document.querySelector('.bnt')
let contador = document.querySelector('.contador')
let numero = 0

botao.addEventListener('click',()=>{
    let indice = Math.floor(Math.random()* cores.length)
    let coresSorteadas = cores[indice]

    document.body.style.background = coresSorteadas
})

butao.addEventListener('click', ()=>{
    numero++,
    contador.textContent = numero

})

bnt.addEventListener('click', ()=>{
    numero--,
    contador.textContent = numero
})