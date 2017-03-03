console.log("hi")
console.log("hi2")
///

function Player(object){
  object = object || {}
  this.hitPoints = object.hitPoints;
  this.attackValue = object.attackValue;
}


var fred = new Player({
  hitPoints: 7,
  attackValue: 5
})

console.log("fred")
console.log(fred.hitPoints)
console.log(fred.attackValue);

export { Player }
