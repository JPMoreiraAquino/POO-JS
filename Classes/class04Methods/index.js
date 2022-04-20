let pessoas = {
  nome: 'João Pedro',
  idade: 23,
  falar: function () {
    console.log("hollo, my name is joão Pedro")
  },
  aniversario() {
    this.idade += 1;
  },
  dizerIdade() {
    console.log('hii! my year old is ' + this.idade);
  }
}

pessoas.aniversario();
console.log(pessoas.idade);
pessoas.aniversario();
console.log(pessoas.idade);
pessoas.dizerIdade();
