let produtos = [
    {
        nome: 'Teclado Mecânico',
        preco: 150
    },
    {
        nome: 'Mouse Gamer',
        preco: 80
    },
    {
        nome: 'Monitor 20',
        preco: 350
    }
]
let total = document.createElement('h2')
total.textContent = '0'


produtos.forEach(({nome,preco}) =>{
    let li = document.createElement('li')
    let text = document.createElement('p')
    let quant = document.createElement('input')
   


    text.textContent = `${nome} (R$ ${preco})`
    quant.type = 'number'
    quant.dataset.preco = preco 
    

    li.append(text,quant,total)

    document.querySelector('ul').append(li)


   quant.addEventListener('change', ()=>{
      
        if(quant.value < 0){
            quant.value = 0
        }
        
        let valortotal = 0


        document.querySelectorAll('input').forEach(input => {
            let quant = input.value
            let quantidade = input.dataset.preco
            
            valortotal += Number(quantidade) * quant

        });

        total.textContent = `total: R$ ${valortotal}`





   })

})