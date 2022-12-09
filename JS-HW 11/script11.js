
window.onload = ()=>{
    let form = document.querySelector('form')
    let register = document.querySelector('.register');
    let overlay = document.querySelector('.overlay');
    let [...inputs] = form.elements;
        inputs.splice(3,3);
        register.onclick = function(e) {
    let isValid = true;
    let inputArr = [];
    let nick = document.querySelector("[nick='Fnick']");
         for(let i = 0; i<inputs.length;i++){
            inputArr.push(inputs[i].value)
        }
    console.log(inputArr)
         for(let i = 0; i<inputArr.length;i++){
    if(inputArr.some(elem => elem.length <= 3 ) == true)
        {
        isValid = false;
        }
        else{
            overlay.classList.add('hide');
            isValid = true;
            }
        }
    if(isValid == false) {
            e.preventDefault()
        alert('Необхідно заповнити всі поля')
        }
        else {
            alert("Реєсстрація пройшла успішно!")
            }
        }   
    }