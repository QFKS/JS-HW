window.onload=()=>{
        
let form = document.querySelector('form')
let register = document.querySelector('.register');
let overlay = document.querySelector('.overlay');
let emailPattern = /\b[a-z0-9._]+@[a-z]{2,6}\.[a-z]{2,4}\b/i;
let [...inputs] = form.elements;
    inputs.splice(3,3);
    register.onclick = function(e){
let isValid = true;
let inputArr = [];
    
    for(let i = 0; i<inputs.length;i++){
    inputArr.push(inputs[i].value)
    }     
    for(let i = 0; i<inputArr.length;i++)
    {
if(inputArr.some(elem => elem.length <= 3 ) == true)
    {
isValid = false;
    }
else
    {
overlay.classList.add('hide');
isValid = true;
    }
    }
if(isValid == false) {
e.preventDefault()
alert('Необхідно заповнити всі поля')
    } else {
alert("Реєсстрація пройшла успішно!");
console.log(inputArr)
    }
    }    

if(emailPattern == mail.value ){
    alert('ug')
}
}