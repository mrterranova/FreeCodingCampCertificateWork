let dog = {
    name: "Fido", 
    numLegs: 4
};

let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name, dog.numLegs)

  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => { return "This dog has "+ dog.numLegs + " legs"}
  };

  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };

  function Dog() {
    this.name = "Bear", 
    this.color = "black", 
    this.numLegs = 4
}

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();

  function Dog(name, color, numLegs) {
    this.name = name; 
    this.color = color; 
    this.numLegs = 4;
}
let terrier = new Dog("George", "tan")

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(19000);
  myHouse instanceof House;

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary){
    if (canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
  console.log(ownProps)

  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property); 
    } else {
      prototypeProps.push(property)
    }
  }
  console.log(ownProps); // prints ["name"]
  console.log(prototypeProps); // prints ["numLegs"]

