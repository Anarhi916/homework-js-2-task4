let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');

button.addEventListener('click', checkLogin);

function checkLogin(){    
    if(inp1.value == 'ivan' && inp2.value == '333' || inp1.value == 'ssss' && inp2.value == '665' || inp1.value == 'gibs' && inp2.value == '0000' ){
       alert('Добро пожаловать');
    }
    else{        
        alert('ошибка');        
    }
    inp1.value = '';
    inp2.value = '';
}