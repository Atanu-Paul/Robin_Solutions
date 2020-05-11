const Fruit=function(name,color){
  this.name=name
  this.color=color
}

Fruit.prototype.ripe=function(){
  return `${this.name}furit is ripe`;
}
Fruit.prototype.grow=function(){
  return `${this.name} is grown, and the color is ${this.color}.`;
}

const apple=function(name,color,type,vari){
    Fruit.call(this, name, color);
    this.type = type;
    this.vari = vari;
}

Object.setPrototypeOf(apple, Fruit.prototype);
apple.prototype = Object.create(Fruit.prototype);
apple.prototype.description = function () {
    return `The type of ${this.name} is ${this.type} and the variety is of ${this.vari} category.`;
};

let Apple = new apple('apple', 'green', 'Honey Crisp', 'Organic');
console.log(Apple.ripe());
console.log(Apple.grow());
console.log(Apple.description());