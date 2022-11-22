// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li
// 2) Підключити скрипт і зробити виборку li елементи в списку
// 3) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль:
/* <ul class="menu-list">
<li>1</li>
<li>2</li>
<li class="active">3</li>
<li>4</li>
<li>5</li>
</ul>*/
//4) Зробити цикл який знаходить  nextElementSibling після active в списку і додає їх в новий массив .

window.onload = ()=>{
    let li = document.querySelectorAll('li');
    let liQuery = document.querySelector('li');
    let liActive = document.querySelector('.active');
    let menu = document.querySelector('.menu-list');
    let arrNew = [];
    let [...ul] = menu.children;

for(let i = 2; i<ul.length; i++) {

    let liActive = document.querySelector(`li:nth-child(${i})`)
    arrNew.push(liActive.nextElementSibling);}
console.log(li, liQuery.parentNode);
console.log(document.querySelector('nav').innerHTML);
console.log(arrNew)

//5) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
    class FilmAdd{
    constructor(year, genre, name, watchCount){
    this.year = year;
    this.genre = genre;
    this.name = name;
    this.watchCount = watchCount;
 }
        getYear() {
return this.year; }
        getView() 
{
return this.watchCount;
}
}
    let Psyhokiller = new FilmAdd(2018, 'criminal', 'Psyhokiller', 7000000);
    let Unshift = new FilmAdd(2021, 'comedy','Unshift', 100000);
    let Nakedgun = new FilmAdd(1988, 'comedy/action', 'Nakedgun', 90000000);

//7) створіть такуж функцію але яка сортує по кількості переглядів
    function sortByView(...arg) {
    let viewArr = [];
    arg.forEach(item => {
    viewArr.push(item.watchCount);
});
    viewArr.sort((a,b) => a-b);    
return viewArr }


console.log(sortByView(Psyhokiller, Unshift, Nakedgun));

//6) За допомогою деструктурізації переберіть массив створених обєктів фільму і виведіть значення по року випуску фільму
   
    function sortByYear(...arg) {
    let yearArr = [];
    arg.forEach(item => {
    yearArr.push(item.year)
});
    yearArr.sort((a,b) => a-b)
return yearArr}


console.log(sortByYear(Psyhokiller, Unshift, Nakedgun));
  
//В html виберіть header, footer, nav  та обєднайте отримані селектори в 1 массив

let arrqs = [document.querySelector('header'), document.querySelector('footer'), document.querySelector('nav')];
console.log(arrqs);
}