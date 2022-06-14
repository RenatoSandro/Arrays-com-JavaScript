const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [ 10, 6, 7, 3]

const reprovados = nomes.filter((aluno, indice) => notas [indice] < 5)

console.log(`reprovados: ${reprovados} `)
