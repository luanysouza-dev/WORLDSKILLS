let coresAlet = [
   'blue',
   'red',
   "green",    // verde
"orange" ,  // laranja
"purple" ,  // roxo
"pink"  ,   // rosa
"black" ,   // preto
"white" ,   // branco
"gray"  ,   // cinza
"brown" , 
]

let botao = document.querySelector('.butao')

botao.addEventListener('click', ()=>{
    let indice = Math.floor(Math.random () * coresAlet.length)
    let coresSorteadas = coresAlet[indice]

    document.body.style.backgroundColor = coresSorteadas
})