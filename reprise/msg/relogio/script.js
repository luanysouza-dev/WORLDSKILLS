let msg = document.querySelector('.msg')
let segredo = document.querySelector('.secreto')
let botao = document.querySelector('.botao')
let mensagem = 'você é bobão'
let parabens = 'parabens, você descobriu o segredo'
let button = false


botao.addEventListener('click', ()=>{
    if(button){
      botao.innerHTML = 'mostrar msg'
      msg.innerHTML = ''
      segredo.innerHTML =''
    }
    else{
      botao.innerHTML = 'esconder msg'
      msg.innerHTML = mensagem
      segredo.innerHTML = parabens
      segredo.style.color = 'red'
    }
    button = !button
})



function atulizarRelogio(){
  let agora = new Date()
  let horas = agora.getHours()
  let min = agora.getMinutes()
  let seg = agora.getSeconds()


  horas = String(horas).padStart(2,'0')
  min = String(min).padStart(2,'0')
  seg = String(seg).padStart(2,'0')
 

  document.querySelector('.relogio').textContent = `${horas}:${min}:${seg}`
}
atulizarRelogio()
setInterval(atulizarRelogio,1000)

function copy(){
   let text = document.querySelector('.test')
   let butao = document.querySelector('.butao')

   butao.addEventListener('click',()=>{
       navigator.clipboard.writeText(text.value)
       text.value = ''
       butao.textContent = 'copiado!'
       setTimeout(()=>{
      butao.textContent = 'copiar!'
   }, 1000)
   })
   
}
copy()
