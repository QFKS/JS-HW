window.onload=()=>{

    // 1) Створити слайдер, через 2 секунди в ньому повино мінятись зображення
    
let slider = document.querySelector('.slide');
let arr = ['img/1.png','img/2.png','img/3.png','img/4.png'];
  for(t=0; t<arr.length; t++){
       div = document.createElement('img');
       div.setAttribute('src', arr[t]);
       div.setAttribute('alt','img')
       slider.appendChild(div)
    }
let offset = 0
   const slide = document.querySelector('.slide');
   const nextBtn = document.querySelector('#next');
   const prevBtn = document.querySelector('#prev');
 function next(){
    offset += 300;
   if(offset > 900){
       offset = 0
 }
    slide.style.left = -offset + 'px';
 }
    nextBtn.addEventListener('click', next);
        
function prev(){
    offset -= 300;
   if(offset < 0){
    offset = 900
 }
   slide.style.left = -offset + 'px';
 }
   prevBtn.addEventListener('click', prev);
        
function autoSlide(){ 
  setInterval(next,2000) 
  } 
  autoSlide()
        
// 2) Створити div  і 3 кнопки ( вперед, назад, вправо, вліво) при кліку на кожну з кнопок змінювати позицію кнопки ( відноно заданого напрямку на 15 рх)
 moveElement = document.querySelector('.move_element');
 let upBtn = document.querySelector('#up');
 let downBtn = document.querySelector('#down');
 let leftBtn = document.querySelector('#left');
 let rightBtn = document.querySelector('#right');
 let xMove = 0;
 let yMove = 0;
    upBtn.addEventListener('click', function(){
     yMove += 15;
    moveElement.style.bottom = yMove + 'px';
    });
   downBtn.addEventListener('click', function(){
    yMove -= 15;
    moveElement.style.bottom = yMove + 'px';
   });
    leftBtn.addEventListener('click', function(){
    xMove += 15;
    moveElement.style.left = -xMove + 'px';
    });
   rightBtn.addEventListener('click', function(){
    xMove -= 15;
    moveElement.style.left = -xMove + 'px';
    });
// 3) Створити 100 елементів div зі стилями (задані через js стилі) при кліку на елемен, він повинен змінити бекграунд на червоний.

let fragment = document.createDocumentFragment();
let body = document.querySelector('body');
function divs() {
    let divContain = document.createElement("div");
    divContain.setAttribute('style', 'display:inline-block; width:50%;');
    fragment.appendChild(divContain);
    body.appendChild(fragment);
    for(let i = 0; i!=100; i++){
        let div = document.createElement("div");
        div.setAttribute('style', 'background:violet;display:inline-block; border:0.5px solid black; width:35px; height:20px;')
        fragment.appendChild(div);
        divContain.appendChild(fragment);
        div.onclick = ()=>{
            div.style.backgroundColor = 'red';
        }
    }
    
}
divs()

// 4) Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна бути кнопка закрити вікно. Під модальним вікном повиний бути блок підкладка при кліку на який модальне вікно закривається
    
    let newFragment = new DocumentFragment();
    let button = document.createElement('button');
        button.setAttribute('style','display: block; margin-top:60px;padding:1px 30px;cursor:pointer;')
        button.innerHTML = 'Кнопка'
        button.classList.add("button");
    document.body.appendChild(button)
    
    let windowModal = document.createElement('div');
    windowModal.classList.add('underModal', 'hide');
    newFragment.appendChild(windowModal);
    
    let modal = document.createElement('div')
        modal.setAttribute('style','position:fixed;top:34%;width:100%;height: 150px;text-align:center;background-color:#FFF8DC;z-index:5;');
        modal.classList.add('modal', 'hide')
    
    let hideButton = document.createElement('button')
        hideButton.setAttribute('style','border-radius:2px;background:blue;border-color:green;cursor:pointer;')
        hideButton.innerHTML = `<img src="img/4.png" alt="img4" style ='width:20px;height:20px;'></img>`
        hideButton.classList.add('close');
    
    modal.appendChild(hideButton);
    newFragment.appendChild(modal);
    
    document.body.appendChild(newFragment);
    
    button.addEventListener('click', close, false);
    windowModal.addEventListener('click', close, false);
    hideButton.addEventListener('click', close, false);
    
    function close() { 
        modal.classList.toggle('hide');
        windowModal.classList.toggle('hide') 

    } 

    }