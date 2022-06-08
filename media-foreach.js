const notas = [4.5, 6, 7, 8.8]

let somaDasNotas = 0

//callback
//notas.forEach(nota => {
  //  somaDasNotas += nota
//})
notas.forEach(function(nota){
    somaDasNotas+= nota
})

let media = somaDasNotas / notas.length
console.log(media)
