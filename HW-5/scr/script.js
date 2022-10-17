              
                    /*1*/    

function UserInfoConstructor(name,age) {
               this.name = name;
               this.age = age;
}
        UserInfoConstructor.prototype.getUserInfo = function() {
              return `Name: ${this.name}  Age: ${this.age}`;
}
        UserInfoConstructor.prototype.setUserInfo = function() {
    this.name = prompt("write here user name");
    this.age = prompt("write here user age");
}
function usersSortByAge(arr, bool){
           let sortArr = Object.assign([],arr);
    if (bool) return sortArr.sort((a,b)=>a.age > b.age ? 1 : -1);
         else return sortArr.sort((a,b)=>a.age < b.age ? 1 : -1);
}
           let user1 = new UserInfoConstructor('Jes', 27);
   console.log(user1.getUserInfo());
               user1.setUserInfo();
   console.log(user1.getUserInfo());
           let user2 = new UserInfoConstructor('Victor', 36);
           let user3 = new UserInfoConstructor('Zosya', 25);
           let users = [user1, user2, user3];
console.log(users);
console.log(usersSortByAge(users, true));
console.log(usersSortByAge(users, false));

                 /* 2 */

function RectangleConstructor(sizeA, sizeB) {
    this.sizeA = sizeA;
    this.sizeB = sizeB;
}
RectangleConstructor.prototype.getS = function() {
    return `Square of rectangle = ${this.sizeA * this.sizeB}`;
}
RectangleConstructor.prototype.getP = function() {
    return `Perimeter of rectangle = ${2 * (this.sizeA + this.sizeB)}`;
}
RectangleConstructor.prototype.getD = function() {
    return `Diagonal of rectangle = ${Math.sqrt(this.sizeA * this.sizeA + this.sizeB * this.sizeB)}`;
}
let rect = new RectangleConstructor(4,3);
console.log(rect.getD());
console.log(rect.getS());
console.log(rect.getP());

// Task 3
let userName = prompt("Input your name");
console.log(`first letter is '${userName[0]}'`);
console.log(`last letter is '${userName[userName.length - 1]}'`);
if (userName.length > 3) console.log(userName.slice(0,3) + '...');