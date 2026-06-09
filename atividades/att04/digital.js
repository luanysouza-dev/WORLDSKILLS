let pausado = false
let botao = document.querySelector('.lua')

function atualizarRelogio(){
    if(pausado) return;
   
    let agora = new Date ()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    horas = String(horas).padStart(2,'0')
    minutos = String(minutos).padStart(2,'0')
    segundos = String(segundos).padStart(2,'0')
    
    document.querySelector('.relogio').textContent = `${horas}:${minutos}:${segundos}`
 

}

botao.addEventListener('click', ()=>{
   pausado = !pausado 
}),
atualizarRelogio()

setInterval(atualizarRelogio,1000)