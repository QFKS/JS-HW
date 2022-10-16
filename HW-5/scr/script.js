
function userConstructor(Name,age){
this.Name=Name;
this.age=age;
  this.userInfo = function(){
    return `${this.name} + ${this.age} + "years old" `
  }
  }
userConstructor.number=0;

userConstructor.prototype.getInfo = function(){
    return `${this.name} ${age} "years old" `
}

const userVic = new userConstructor('Vic', '333');
console.log(userVic);


