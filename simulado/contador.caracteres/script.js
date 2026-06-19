let text = document.querySelector('.text')
let contador = document.querySelector('.contador')
let caracteres = text.maxLength
  
text.addEventListener('input', ()=>{
   contador.textContent = `${ (caracteres- text.value.length)} caracteres restantes`
    
})