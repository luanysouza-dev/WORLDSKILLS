let lista = ['JavaScript', 'React', 'Python', 'Java', 'CSS', 'HTML', 'Node', 'SQL']
let input = document.querySelector('.text')

lista.forEach(item => {
    let li = document.createElement('li')


    li.textContent = item

    document.querySelector('ul').append(li)

})

input.addEventListener('input', () => {
    document.querySelector('ul').innerHTML = ''
    let filtro = lista.filter(item => item.toLowerCase().includes(input.value.toLowerCase()))

    filtro.forEach(item => {
        let li = document.createElement('li')


        li.textContent = item

        document.querySelector('ul').append(li)

    })



})


if(RYAN_FALAR == FALSE){
    return LUZIA_FALAR = FALSE
}
else if (LUZIA_FALAR == FALSE){
    return RYAN_FALAR == FALSE
}