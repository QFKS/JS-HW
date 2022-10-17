// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.*/

const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
function Geven(arr){
  let evenArr = [];
  for (let i=0; i<arr.length;i++){
    if(arr[i] % 2 == 0)
    evenArr.push(arr[i]);
} 
return evenArr;
}
 console.log(Geven(arrRandomNumbers)); 

// 2)Створити функцію яка заповнює глобальну змінну непарними числами, а потім сортує їх в порядку зростання.
 
function Godd(arr){
  let oddArr = [];
  for (let i1=0; i1<arr.length; i1++) {
  if (arr[i1] % 2 != 0)
  oddArr.push(arr[i1])
  }
  return oddArr;
}
console.log(Godd(arrRandomNumbers));

//3)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає

function GdoubleArr(arr){
  let doubleArr = [];
  for (let i2=0; i2<arr.length; i2++){
  doubleArr.push(arr[i2]*2)
  }
  return doubleArr;
}
console.log(GdoubleArr(arrRandomNumbers));

//4)Створити функції дій калькулятора (додавання, ділення, множення, віднімання).При введені операції викликати ту чи іншу функцію з отриманими данними ( для вирішення можна викорисатти if або switch)*/

function add(a,b){
  console.log(a+b);
}
function sub(a,b){
  console.log(a-b)
}
function mult(a,b){
 console.log(a*b)
}
function div(a,b){
  console.log(a/b)
}
  let res;
  const a = parseFloat(prompt('Enter first number :'));
  const oper = prompt('Enter operator like +,-,*,/');
  const b = parseFloat(prompt('Enter second number'));
  switch(oper) {
    case '+':
         res = a + b;
        console.log(`${a} + ${b} = ${res}`);
        break;

    case '-':
         res = a - b;
        console.log(`${a} - ${b} = ${res}`);
        break;

    case '*':
         res = a * b;
        console.log(`${a} * ${b} = ${res}`);
        break;

    case '/':
         res = a / b;
        console.log(`${a} / ${b} = ${res}`);
        break;

    default:
        console.log('Invalid operator');
        break;
    
}
if (res=='Infinity'){
  console.log('no div on zero')
}

//5) створити функцію яка видаляє всі boolean значення з массиву і повертає массив тільки з стрінгами

const boolArr = ['aaa', true, 'ccc', false, 'false']
function antiboolean(arr){
for(let i3=0; i3<arr.length; i3++){
  if (typeof arr[i3] == 'boolean') 
  arr.splice(i3, 1);
} 
return arr;
}
console.log(antiboolean(boolArr));


//6) створити функцію яка замінює в массиві =) на ;)
const smile = [':)','=)',':)', '=)',':)', '=)'];

function resmile(arr){
    for (let i4 = 0; i4 < arr.length; i4++) {
if (arr[i4] == '=)')  
    arr[i4]=';)';
  }
  return arr;
}
console.log(resmile(smile));

// 7 створити функцію яка отримує аргумент, якщо це 'last' то функція поміщає останній елемент массиву в новий массив і видаляє останній елемент массиву, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з поточного


const animalar =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let anima = [];
const animals =function(){
  argument = prompt('write here argument like: first or last')

    if(argument == "first"){
         first=animalar.shift()
        anima.push(first)
       }
    if(argument == "last"){
         last=animalar.pop()
        anima.push(last)
       }
      }
animals(animalar)
console.log(anima)