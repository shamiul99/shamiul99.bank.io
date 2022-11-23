let password = document.querySelector('#password');
let email = document.querySelector('#email');
let form = document.querySelector('.login-form');
let depositBtn = document.querySelector('.depositBtn');



form.addEventListener('submit',nextItem);
depositBtn.addEventListener('click',addDeposit);



function addDeposit(){

    let depositInput = document.querySelector('#depositInput').value;
    let depositInputNumber = parseFloat(depositInput);

    if(isNaN(depositInputNumber)){
        alert('Something went wrong.try later');
    }else{
        
        updateSpantext('#latest-deposit',depositInputNumber)
        updateSpantext('#balance',depositInputNumber)

        function updateSpantext(id,depositInputNumber){
            let currentBalance = document.querySelector(id).innerText;
            let currentBalanceNumber = parseFloat(currentBalance);
            let totalBalance = currentBalanceNumber + depositInputNumber;
            document.querySelector(id).innerText = totalBalance;
        }
    
        document.querySelector('#depositInput').value = '';
    }
}



function nextItem(e){
    let parentElement = form.parentElement.parentElement;
    let dashboard = document.querySelector('.dashboard');
    if(confirm("Are You Remove?")){
        parentElement.style.display = 'none';
        dashboard.style.display = 'grid';
        
    }
    e.preventDefault();
}