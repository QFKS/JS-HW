
window.onload =()=>{
    let element = document.querySelector('form');
    
    element.onsubmit = function nick(e){
        let isValid = true;
        let nick = document.querySelector("[nick='Fnick']");
        if(nick.value.length <= 2){
            isValid = false;
        }
        if(!isValid){
            e.preventDefault();
            alert('Всі поля треба заповнити даними');
        }
        }
    
}