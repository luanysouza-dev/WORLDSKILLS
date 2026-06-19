let botao = document.querySelector('.botao')
let text = document.querySelector('.text')
let img = document.createElement('img')
let p = document.createElement('p')
let color = document.querySelector('.cor')
let bnt = document.querySelector('.bnt')
let div = document.querySelector('.cubo')


botao.addEventListener('click', ()=>{
    if(text.value !=''){
        img.src = text.value
        text.value = ''
        document.querySelector('.pai').textContent = ''
        document.querySelector('.pai').append(img)
    }
    else{
        p.textContent = 'Sua imagem ficará aqui'
        document.querySelector('.pai').textContent = ''
        document.querySelector('.pai').append(p)
    }
})




bnt.addEventListener('click',()=>{
    div.style.background = color.value
    
})