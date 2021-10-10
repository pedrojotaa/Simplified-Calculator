let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')

let soma = document.querySelector('#soma')
let subtrai = document.querySelector('#subtrai')
let multiplica = document.querySelector('#multiplica')
let divide = document.querySelector('#divide')

let resultado = document.querySelector('#resultado')

soma.addEventListener('click', () => {
    let numero1 = n1.value
    let numero2 = n2.value

    let  valor = parseInt(numero1) + parseInt(numero2)

    resultado.innerHTML = `<p> ${valor} </p>`
})

subtrai.addEventListener('click', () => {
    let numero1 = n1.value
    let numero2 = n2.value

    let  valor = parseInt(numero1) - parseInt(numero2)

    resultado.innerHTML = `<p> ${valor} </p>`
})


multiplica.addEventListener('click', () => {
    let numero1 = n1.value
    let numero2 = n2.value

    let  valor = parseInt(numero1) * parseInt(numero2)

    resultado.innerHTML = `<p> ${valor} </p>`
})


divide.addEventListener('click', () => {
    let numero1 = n1.value
    let numero2 = n2.value

    let  valor = parseInt(numero1) / parseInt(numero2)

    resultado.innerHTML = `<p> ${valor} </p>`
})


