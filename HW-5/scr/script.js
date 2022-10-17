

function userConstructor(Name,age){
this.Name=Name;
this.age=age;
this.getuserData = function(){
    return ` Login:${this.Name} age:${this.age} `
    }

}
console.log(this);



const userVic = new userConstructor('Vic', 29);
console.log(userVic);
const userJohn = new userConstructor("John", 27);
console.log(userJohn);
const userMary = new userConstructor("Mary", 26);
console.log(userMary);
const userJack = new userConstructor("Jack", 25);
console.log(userJack);
/*
let usrArr = new Array();
console.log(usrArr);
/*
function Rectangle(sideA, sideB){
    this.sideA = sideA;
    this.sideB = sideB; 
}
Rectangle.prototype.getArea = function(){
    return `Area = ${this.sideA*this.sideB}`
}


let area1 = new Rectangle(2,3);
let area2 = new Rectangle(4,3);

console.log(area1.getArea());
console.log(area2.getArea());

*/

function UserInfoConstructor(name,lastName,age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}
UserInfoConstructor.prototype.getUserInfo = function() {
    return `Name: ${this.name} \n Last Name: ${this.lastName} \n Age: ${this.age}`;
}
UserInfoConstructor.prototype.setUserInfo = function() {
    this.name = prompt("Input user name");
    this.lastName = prompt("Input user last name");
    this.age = prompt("Input user age");
}
function usersSortByAge(arr, bool){
    let sortArr = Object.assign([],arr);
    if (bool) return sortArr.sort((a,b)=>a.age > b.age ? 1 : -1);
    else return sortArr.sort((a,b)=>a.age < b.age ? 1 : -1);
}

let user1 = new UserInfoConstructor('Dimka', 'Zinko', 33);
console.log(user1.getUserInfo());
user1.setUserInfo();
console.log(user1.getUserInfo());
let user2 = new UserInfoConstructor('Petro', 'Petronko', 46);
let user3 = new UserInfoConstructor('Ivan', 'Ivanenko', 25);
let users = [user1, user2, user3];
console.log(users);
console.log(usersSortByAge(users, true), 'sort up');
console.log(usersSortByAge(users, false), 'sort down');

// Task 2
function RectangleConstructor(sizeA, sizeB) {
    this.sizeA = sizeA;
    this.sizeB = sizeB;
}
RectangleConstructor.prototype.getSquare = function() {
    return `Square of rectangle = ${this.sizeA * this.sizeB}`;
}
RectangleConstructor.prototype.getPerimeter = function() {
    return `Perimeter of rectangle = ${2 * (this.sizeA + this.sizeB)}`;
}
RectangleConstructor.prototype.getDiagonal = function() {
    return `Diagonal of rectangle = ${Math.sqrt(this.sizeA * this.sizeA + this.sizeB * this.sizeB)}`;
}
let rect = new RectangleConstructor(4,3);
console.log(rect.getDiagonal());
console.log(rect.getSquare());
console.log(rect.getPerimeter());

// Task 3
let userName = prompt("Input your name");
console.log(`first letter is '${userName[0]}'`);
console.log(`last letter is '${userName[userName.length - 1]}'`);
if (userName.length > 3) console.log(userName.slice(0,3) + '...');