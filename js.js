let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');
let users = {
    ivan: '333',
    ssss: '665',
    gibs: '0000'
}


button.addEventListener('click', checkLogin);

function checkLogin(){    
    users[inp1.value] === inp2.value ? alert('Добро пожаловать') : alert('ошибка');
    inp1.value = '';
    inp2.value = '';
}




