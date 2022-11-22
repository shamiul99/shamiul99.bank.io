let password = document.querySelector('#password');
let email = document.querySelector('#email');
let form = document.querySelector('.login-form');
form.addEventListener('submit',nextItem);

function nextItem(e){
    let parentElement = form.parentElement.parentElement;
    let dashboard = document.querySelector('.dashboard');
    if(confirm("Are You Remove?")){
        parentElement.style.display = 'none';
        dashboard.style.display = 'grid';
        
    }
    e.preventDefault();
}