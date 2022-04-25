function Ninja(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.shoot = () => {
    console.log("you shot with the " + this.weapon);
  };
}


const ninja01 = new Ninja("Sasuke", "Kunai")

const ninja02 = new Ninja("Naruto", "shuriken")


console.log(ninja01.name);
console.log(ninja02.name);
