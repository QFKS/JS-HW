/*1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.*/
 
  
const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
 function aaaa(aaa){
 let arrnew = [];
 let aa = '';    
for(let a=0; a<=11; a++){
aa=[a];
if (arrRandomNumbers[a]%2===2)
arrnew.push(arrRandomNumbers[a]);
}
console.log(arrnew);
}

/*2)Створити функцію яка заповнює глобальну змінну непарними числами, а потім сортує їх в порядку зростання.*/
const arrnum = [1,3,5,4,6,9,8,20,31,33,10];
let arrneww = [];
for(let a=0; a<11; a++){
if (arrnum[a]%2==1)
arrneww.push(arrnum[a]);
}
arrneww.sort(function(a,b){ 
    return (a - b)
  })
  console.log(arrneww);
/*3)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає*/
 const arr3 =[1,3,5,4,6,9,8,20,31,33,10];
 let arr3new = [];
for ( let a=0; a<11; a++){
  let mult = arr3[a]*3;
  arr3new.push(mult);  
}
arr3new.sort(function(a,b){ 
    return (a - b) })
console.log(arr3new);
/*4)Створити функції дій калькулятора (додавання, ділення, множення, віднімання).При введені операції викликати ту чи іншу функцію з отриманими данними ( для вирішення можна викорисатти if або switch)*/
let result;
const number1 = parseFloat(prompt('Enter first number: '));
const value = prompt('Enter value ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));
switch (value) {
   case '+':
        result = number1 + number2;
       console.log(`${number1} + ${number2} = ${result}`);
       break;

   case '-':
        result = number1 - number2;
       console.log(`${number1} - ${number2} = ${result}`);
       break;

   case '*':
        result = number1 * number2;
       console.log(`${number1} * ${number2} = ${result}`);
       break;

   case '/':
        result = number1 / number2;
       console.log(`${number1} / ${number2} = ${result}`);
       break;

   default:
       console.log('Invalid value');
       break;
   
}
/*5) створити функцію яка видаляє всі boolean значення з массиву і повертає массив тільки з стрінгами*/
let boolArr = ['aaa', true, 'ccc', false, 'false']
let noboolarr = boolArr.filter(Boolean);
console.log(noboolarr);
/*6) створити функцію яка замінює в массиві =) на ;)*/
const smile = [':)','=)',':)', '=)',':)', '=)'];

smile.splice(-1, 1,';)');
smile.splice(-3, 1,';)');
smile.splice(-5, 1,';)');

console.log(smile);

// 7 створити функцію яка отримує аргумент, якщо це 'last' то функція поміщає останній елемент массиву в новий массив і видаляє останній елемент массиву, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з поточного

function last(){
 const flst =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
 console.log(flst)
 flst.slice(1, -1);
 console.log(flst);
}