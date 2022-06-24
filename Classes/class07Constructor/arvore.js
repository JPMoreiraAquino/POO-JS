function criarArvore(especie, temFruto) {
  return {
    especie,
    temFruto
  }

}

let laranjeira = criarArvore('laranjeira', true)
console.log(laranjeira);
console.log(laranjeira.constructor)

function Heroi(nome, classe)  {
  this.nome = nome;
  this.classe = classe;
}

let Batman = new Heroi('Batman', 'Escola de rico')

console.log(Batman)
console.log(Batman.constructor)
