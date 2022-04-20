let car = {
  typer: 'SUB',
  power: function () {
    console.log('powerd')
  }
}

console.log(car.typer)
car.power()

delete car.typer
delete car.power

console.log(car)
