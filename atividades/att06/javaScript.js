let buttotype = false
let botao = document.querySelector('.dark')

botao.addEventListener('click', ()=>{
    let tema = document.querySelector('img')
    if(buttotype){
        document.querySelector('body').classList.add('modo_escuro')
        tema.src = 'toggleoff.png'
    }
    else{
         document.querySelector('body').classList.remove('modo_escuro')
         tema.src = 'toggleon.png'
    }
    buttotype = !buttotype
})