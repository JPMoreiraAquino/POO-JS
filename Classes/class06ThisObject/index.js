let ninjas = {
  nome: 'Sasuke',
  ranking: 'S',
  gun: 'shuriken',
  gunFire: function () {
    console.log(this.nome + " threw the" + this.gun)
  },
  gunTwoTimes: function() {
    for(let i = 2; i > 0; i--) {
      this.gun()
    }
  }
}
let ninjas2 = {
  nome: 'Sasuke',
  ranking: 'S',
  gun: 'shuriken',
  gunFire: function () {
    console.log(this.nome + " threw the" + this.gun)
  },
  gunTwoTimes: function() {
    for(let i = 2; i > 0; i--) {
      this.gunFire()
    }
  }
}



ninjas2.gunTwoTimes()
