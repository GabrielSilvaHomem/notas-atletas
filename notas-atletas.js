function calcularMedia(atletas){
	for (let i = 0; i < atletas.length; i++){
		atletas[i].notas = atletas[i].notas.sort();
		let notasCertas = atletas[i].notas.slice(1,4);
		let soma = 0
		notasCertas.forEach(function(nota){
			soma += nota
		});
		let media = soma / notasCertas.length
		console.log(`Atleta: ${atletas[i].nome}
Notas Obtidas: ${atletas[i].notas}
Média Válida: ${media}\n`)
	};
};
	
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calcularMedia(atletas);

