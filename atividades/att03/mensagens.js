let buttontype = false
let msg = 'o luffy vai ser o rei dos piratas'
let parabens = 'Parabéns, você descobriu o segredo!'
let segredo = document.querySelector('.segredo')
let botao = document.querySelector('.botao')
let mensagem = document.querySelector('#mensagem')

botao.addEventListener('click', ()=>{

    if(buttontype){
        botao.innerHTML = 'mostrar mensagem'
       mensagem.innerHTML = ''
       segredo.innerHTML = ''

    }
    else{
        botao.innerHTML = 'esconder mensagem'
        mensagem.innerHTML = msg 
        segredo.innerHTML = parabens
        segredo.style.color = 'red'
    }
    buttontype = !buttontype
})