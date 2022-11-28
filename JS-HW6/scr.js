//№1   1) Створити функцію яка отримує невизначену кількість аргументів і вираховує їх суму 


function fun(a, b, c){
    let normArr = Array.from(arguments);
    console.log(normArr);
    normArr.map((a)=>console.log(a*2));

}   
fun (prompt());

//№2     2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає рік народження і якщо сьогодні день народження користувача то вивести привітання

function year() {
    let res = "";
    const bir = new Date(prompt('Input you birthday(місяць/день/повний рік)'));
    if (isNaN(bir)) 
    return "Invalid date";
    const today = new Date();
    result = bir.getFullYear() + " рік ";
    if (bir.getDate() == today.getDate() && bir.getMonth() == today.getMonth()) {
        res = res + " Happy birthday!!!";
    }
    return res;
}
console.log(year());

//№3     3) Створити функцію яка з массиву вибирає всі булеві значення

    const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false', false, 'true', true]];
function bool(arr) {
    let res = [];
    for (let i = 0; i<arr.length;i++) {
      if(typeof arr[i] === 'boolean' || typeof arr[i].a === 'boolean') {
        res.push(arr[i]);
    }
       else if (typeof arr[i] === 'object') {
    for(let r = 0; r<10; r++){
      if(typeof arr[i][r] === 'boolean') {
        res.push(arr[i][r])
        }
    }}}
    return res
}
console.log(bool(sort))

//№4     4) Створити функцію яка повертає сторіччя, функція отримує рік 1810->19 

function century(yearr) {
    let str = prompt(yearr.toString());
    let cent = str[0] + str[1];
    let res = parseInt(cent)
    if((str[2] + str[3])>9){
      return res + 1 + "'s" + "" + "century"
    }
    return res + "'s" + " "+ "century";
  }
 console.log(century('type here year'))
 
 
//№5     5) Створити функцію яка повертає скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

function daysInMonth(days){
    days = new Date()
    let month = days.getMonth();
    let year = days.getFullYear();
    console.log(`This month has ${new Date(year,month-1,0).getDate()} days`)
    console.log(`In next month will be ${new Date(year,month+2,0).getDate()} days`)
}
(daysInMonth());
