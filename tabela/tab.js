let pessoas =[
    {
        id:'1',
        nome:'gabimaru',
        idade:'13',
        genero:'masculino'
    },
     {
        id:'1',
        nome:'gabi',
        idade:'12',
        genero:'feminino'
    },
     {
        id:'1',
        nome:'gabiru',
        idade:'20',
        genero:'masculino'
    },
     {
        id:'1',
        nome:'maru',
        idade:'19',
        genero:'feminino'
    }
]

pessoas.forEach(pessoa =>{
    const tr = document.createElement('tr')
    const id = document.createElement('td')
    const nome = document.createElement('td')
    const idade = document.createElement('td')
    const genero = document.createElement('td')
    

    id.textContent = pessoa.id
    nome.textContent = pessoa.nome
    idade.textContent = pessoa.nome
    genero.textContent = pessoa.genero

    tr.append(id,nome,idade,genero)

    document.querySelector('table').append(tr)

    genero.style.color = pessoa.genero == 'masculino' ? 'red' : 'green'
})