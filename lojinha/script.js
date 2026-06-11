let produtos = [
    {  Image:'https://i.pinimg.com/736x/19/a3/72/19a37225fba416a7fa169ab9e71db0c3.jpg',nome:'camisa', preco : 60}

]
let carrinho = []

let total = 0

produtos.forEach(produto =>{
    let div = document.createElement('div')
    let nome = document.createElement('h1')
    let preco = document.createElement('p')
    let image = document.createElement('img')
    let bnt = document.createElement('button')
    let esq = document.createElement('button')

    image.src = produto.Image
    nome.textContent = produto.nome
    preco.textContent = produto.preco
    bnt.textContent = 'adicionar'
    esq.textContent = ' excluir'

    div.append(nome,preco,image,bnt,esq)

    document.querySelector('.container').append(div)

   
   bnt.addEventListener('click', ()=>{
     carrinho.push(produto)
       total = carrinho.reduce((soma, item) => {
            return soma + item.preco;
        }, 0);


        console.log('Total: R$', total);

   })
  esq.addEventListener('click', ()=>{
    carrinho.pop()
    if(total >0 ){
          total -= produto.preco
        console.log('Total: R$', total);
    }
   

   })
})

let button = document.querySelector('.botao')


