let input = document.querySelector('.idade')
let botao = document.querySelector('.val')
let msg = document.querySelector('.msg')


botao.addEventListener('click', ()=>{
   
   let idade = input.value
    
    if( idade >= 18){
        botao.innerHTML = 'verificado'
        msg.innerHTML = 'você é maior de idade!'
        msg.style.color ='green'
    }
    else if (idade > 0 && idade < 18){
        botao.innerHTML = 'verificar'
        msg.innerHTML = 'você é menor de idade!'
        msg.style.color ='red'
    } 
    else{
        botao.innerHTML = 'verificar'
        msg.innerHTML = 'campo vazio!'
        msg.style.color ='red'
    }   

     input.value = ''
})