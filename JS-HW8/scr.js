/* 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
Дані виводяться в стилізований ліст,  можете підключити bootstrap чи написати свої стилі. 
При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино 
бути данні які введено і час створення в форматі день, номер місяця, рік.*/

window.onload = ()=> {


    let menu = document.querySelector('.menu');
    let fragment = new DocumentFragment();
    const suk = ()=> {
        let userArr = [];
   
//     let user = prompt("To do");
    while (true) {
   
        let  user = prompt("Type what to do")
   
     userArr.push(user)
    if(typeof user == 'object') {
    break
            }
    
        }
    for (let iterator of userArr) {
    let li = document.createElement('li');
    // // let checkbox = document.createElement('type');
    //         li.setAttribute('type', 'none')
    let span = document.createElement('span')
            span.style.width = '40%';
            span.style.display = 'inline-block'
            span.style.padding = '10px'
    let spanDate = document.createElement('span');
            spanDate.style.width = '40%';
            spanDate.style.display = 'inline-block'
            spanDate.style.padding = '10px'
            span.innerHTML = iterator;
            spanDate.innerHTML = `Date : ${new Date().getDate()} . ${new Date().getMonth()} .  ${new Date().getFullYear()}`;
            fragment.appendChild(li)
            fragment.appendChild(span);
            fragment.appendChild(spanDate);
            li.appendChild(span);
            li.appendChild(spanDate);
        }
    menu.appendChild(fragment)
        if(userArr.length>5){
    menu.removeChild(menu.firstElementChild)
    menu.removeChild(menu.lastElementChild)
        }
    }
    suk()
    
    /*2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення alt для зображення, стилізувати задовільно
    */
    let images = [
        {
            imgPath:'image/image.png',
            alt:'png image',
            href:''
        },

        {
            imgPath:'image/image1.png',
            alt:'png image',
            href:''
        }
    ]
    divSecondTask = document.querySelector('.Sec');
    for (let i = 0; i<images.length; i++) {
        const {imgPath, alt, href} = images[i];
        p = document.createElement('p');
        p.innerHTML = `<img src="${imgPath}" alt="${alt}"><br> <a href ='${href}' target='blank'>link</a>`
        fragment.appendChild(p)
        divSecondTask.appendChild(fragment)
    }

    /*3) Створити поле (без кораблів) для морського бою, літери, цифри і стилі для поля задати за допомогою js */
    function seaBattle() {
        let letterArr = ["","A","B","C","D","E","F","G","H","i","J"];
        let div = document.querySelector('.Third');
        div.style.width = '100%';
        div.setAttribute('style', 'display:flex; flex-wrap:wrap');
        let divRow = document.createElement('div');
        divRow.setAttribute('style', 'display:flex; flex-direction:row; width:100%;')
        fragment.appendChild(divRow);
        div.appendChild(fragment);
        let divColumn = document.createElement('div');
        divColumn.setAttribute('style', 'display:flex; flex-direction:column; width:3%;')
        fragment.appendChild(divColumn);
        div.appendChild(fragment);
        for(let i = 0; i<letterArr.length; i++) {
            let divNew = document.createElement("div")
            divNew.style.display = "flex";
            divNew.innerHTML = letterArr[i];
            divNew.style.border = '0.1px solid black';
            divNew.style.width = '3%';
            divNew.style.height = '40px';
            divNew.style.alignItems = 'center';
            divNew.style.justifyContent = "center";
            fragment.appendChild(divNew);
            divRow.appendChild(fragment);
        }
        for(let i = 1; i!=11; i++) {
            let divNew = document.createElement("div")
            divNew.style.display = "flex";
            divNew.innerHTML = i;
            divNew.style.border = '0.1px solid black';
            divNew.style.width = '100%';
            divNew.style.height = '40px';
            divNew.style.alignItems = 'center';
            divNew.style.justifyContent = "center";
            fragment.appendChild(divNew);
            divColumn.appendChild(divNew); 
        }
        for(let i = 1; i!=11; i++) {
            let divColumn1 = document.createElement('div');
            divColumn1.setAttribute('style', 'display:flex; flex-direction:column; width:3%;')
            fragment.appendChild(divColumn1);
            div.appendChild(fragment);
            for(let i = 0; i!=10; i++) {
                
                let divNew = document.createElement("div")
                divNew.style.display = "flex";
                divNew.innerHTML = "";
                divNew.style.border = '0.1px solid black';
                divNew.style.width = '100%';
                divNew.style.height = '40px';
                divNew.style.alignItems = 'center';
                divNew.style.justifyContent = "center";
                fragment.appendChild(divNew);
                divColumn1.appendChild(divNew); 
            }
        }
    }
    seaBattle()
}