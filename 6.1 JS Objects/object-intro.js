/* When the script file is loaded, execution automatically begins at the top of the file */
console.log("hello there")
console.log("General Kenobi")

// Player object information
var player = {
  name: "Old Ben",
  health: 200,
  inventory: "nuke",
  showInfo: function() {
    console.log(this.name + " has " + this.health + " heatlh and a " + this.inventory);
  },
  takeDamage: function() {
    this.health -= 15;
  }

}

// Example property and method access
/*player.showInfo();
player.health = 50;
player.showInfo();
player.takeDamage();
player.showInfo();
console.log(player["inventory"]);
console.log(player.inventory);*/

var pizza = {
  size: "large",
  topp: "Pepperoni and Sausage",
  cost: "11.95",
  showInfo: function() {
    console.log(" a " + this.size + " Pizza " + this.topp + " for cost of 11.95") 
  },

}
/*pizza.showInfo();
pizza.size = "medium"
pizza.showInfo()*/

var student = {
  first: "Adolfo",
  last: "Andrade",
  age: "16",
  grade:"10th",
  matric: "0511371012",
  showInfo: function() {
    console.log(" first name is  " + this.first + " last name is " + this.last + " age is " + this.age + " grade is " + this.matric + " matric number " )  

  }
 
}

student.showInfo();






