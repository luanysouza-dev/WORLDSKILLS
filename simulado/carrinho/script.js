let produtos = [
   { nome: 'Teclado Mecânico',
     preco: 150
   },
    { nome: 'Mouse Gamer',
     preco: 80
   },
    { nome: 'Monitor 20',
     preco: 350
   }
]

let total = document.querySelector('h2')



produtos.forEach(({nome,preco}) =>{
   let li = document.createElement('li')
   let text = document.createElement('p')
   let quantidade = document.createElement('input')


   text.textContent = `${nome} (R$ ${preco})`
   quantidade.type = 'number'
   quantidade.dataset.preco = preco


  li.append(text,quantidade)

  document.querySelector('ul').append(li)


  quantidade.addEventListener('change',()=>{
   
    
    if(quantidade.value < 0 ){
      quantidade.value = 0
    }

     let valtotal = 0

    document.querySelectorAll('input').forEach(input =>{
       let quant = input.value
       let inputpreco = input.dataset.preco

       valtotal += Number(inputpreco) * quant
    })

   total.textContent = `total: R$${valtotal}`



  })
  
  
})
