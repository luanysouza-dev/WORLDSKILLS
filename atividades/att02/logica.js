let numero = 0
let contador = document.querySelector('.contador')
let bntMais = document.querySelector('.mais')
let bntMenos = document.querySelector('.menos')

bntMais.addEventListener('click', ()=>{
    numero++
    contador.textContent = numero
})

bntMenos.addEventListener('click', ()=>{
    numero--
    contador.textContent = numero
  
})