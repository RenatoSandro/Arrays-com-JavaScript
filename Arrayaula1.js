//let nota1 = 7.7;
//let nota2= 6.8;
//let nota3 = 9.5;
//let nota4 = 8.0;

//let media = (nota1 + nota2 + nota3 + nota4) /4;
//console.log(media);



// indices     0     1     2   3         indices são a ordem que cada elemento representa; ex: o elemento 7.7 esta no indice 0    
const notas = [7.7, 6.8, 9.5, 8.0]

// cada valor chamamos de elementos. Essa Array notas contém 4 elementos.

let media = (notas [0] + notas [1] + notas [2] + notas [3]) / notas.length

console.log(media)
// length representa a quantidade de dados, ao inves de utilizar a media sobre 4 (/4), utilizamos a length