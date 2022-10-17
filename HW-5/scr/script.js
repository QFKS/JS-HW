

function userCo(Name,age){
this.Name=Name;
this.age=age;
};
userCo.prototype.callInfo = function(obj){
    return `${obj.Name} old: ${obj.age}`
    return obj.Name + obj.age
  }
userCo.prototype.UpdateKeyData = function(arraylength){
    console.log(arraylength)
    arraylength.Name = prompt('rewrite name');
    arraylength.age = prompt('reage')
    console.log(arraylength.Name, arraylength.age)
    console.log(arraylength)
    sortByAge(arrayUsers)
    return arraylength
}
const userfirst = new userCo('Vic', '29');
const usersecond = new userCo("John", '27');
const userthird = new userCo("Mary", '26');
const userfourth = new userCo("Jack", '25');

let arrayUsers = [userfirst, usersecond, userthird, userfourth],
sortAgeToOld, sortAgeFromOld;
//console.log(arrayUsers)

let userAge = [];
const sortByAge = function(array){

    for (let g = 0; g < array.length; g++){
        let obj = array[g];
        let age = obj.age;
        userAge.push(age)
    }  
    return console.log(userAge),
    
    console.log(sortAgeToOld = userAge.sort(function(a, b){return a-b})), 
    console.log(sortAgeFromOld = userAge.sort(function (a ,b) 
    {
        return b-a
    }));
    }
    console.log(sortByAge(arrayUsers))
    console.log(userAge)
console.log(sortAgeToOld)
 console.log(sortAgeFromOld)

    /*2*/
  /*  function objcon(a, b){
        this.a = a;
        this.b = b;
    }
     const value = function(){
     let a = prompt('a')
     let b = prompt('b')
     let object = new objcon(a,b)
     return object
  }
   console.log(value())
    let object = new objcon(5, 10)
    console.log(object)

    objcon.prototype.S = function(obj){
        return obj.a * obj.b
    } 
    objcon.prototype.P = function(obj){
        return 2*(obj.a+obj.b)
    }
    objcon.prototype.d = function(obj){
        return sqrt(Math.pow(obj.a,2)+Math.pow(obj.b,2))
    }
*/
/*
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

let user1 = new UserInfoConstructor('Ivan', 'Baldaev', 27);
console.log(user1.getUserInfo());
user1.setUserInfo();
console.log(user1.getUserInfo());
let user2 = new UserInfoConstructor('Mary', 'Petronko', 46);
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
if (userName.length > 3) console.log(userName.slice(0,3) + '...');*/