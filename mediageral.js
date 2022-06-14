const salaPython = [ 10, 7, 8, 9, 10, 6]
const salaJava = [6, 7, 6, 9]
const salaJavaScript = [ 9, 8, 6, 10]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.lenght
}

console.log( `Média da sala de Phyton ${mediaSala(salaPython)}`)
console.log( `Média da sala de Java ${mediaSala (salaJava)} `)
console.log(`Média sala Java Script ${mediaSala (salaJavaScript)}`)
