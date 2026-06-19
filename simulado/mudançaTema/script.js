let botao = document.querySelector('.dark')
let buttontype = false


botao.addEventListener('click', ()=>{
    if(buttontype){
       document.querySelector('body').classList.add('dark_tema')
    }
    else(
       document.querySelector('body').classList.remove('dark_tema')
    )
    buttontype = !buttontype
})