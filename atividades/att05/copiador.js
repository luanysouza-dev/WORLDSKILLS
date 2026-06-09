let copias = document.querySelector('.copias')
let text = document.querySelector('.texto')
let img = document.querySelector('img')
let imgbase = img.src 


copias.addEventListener('click', ()=>{
   navigator.clipboard.writeText(text.value)
   text.value = ''
   img.src = "visto.png"

setTimeout(() => {
   img.src = imgbase
}, 1000)
   
   
})