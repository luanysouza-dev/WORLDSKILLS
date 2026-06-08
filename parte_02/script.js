let buttontype = true
let botao = document.querySelector('button')
let inputtype = false
const butao = document.querySelector('.dark')
const bnt = document.querySelector('.olho')
let emal = 'luanylima@gmail.com'
let sena = 1234    


botao.addEventListener('click', (e)=>{
    e.preventDefault()
    let tema = butao.querySelector('img')
    if(buttontype){
        document.querySelector("body").classList.add('dark_tema') // adiciona o tema 
        tema.src = 'sue.png'    
    }
    else{
        document.querySelector("body").classList.remove('dark_tema')// remove o tema
        tema.src = 'lua.png'
       

    }
    buttontype = !buttontype
})

function mostra(){
     let envia = document.querySelector('#senha')

   if(inputtype){
       envia.type = 'text'
       bnt.src = 'mostrar.png'
     }
     else{
        envia.type = 'password'
        bnt.src = "esquecer.png"
    
     }
     inputtype = !inputtype
}
 

function enviar(){
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
   
     if(emal == email && senha == sena){
        window.location.href = "home.html";
     }
     else{
        alert ('acesso negado')
     }

}
 
     



