let password = document.querySelector('#password');
let email = document.querySelector('#email');
let form = document.querySelector('.login-form');
let depositBtn = document.querySelector('.depositBtn');
let withdraw = document.querySelector('#addWithdraw')



form.addEventListener('submit',nextItem);
depositBtn.addEventListener('click',addDeposit);
withdraw.addEventListener('click',withdrawMoney);



function addDeposit(){
    let depositInputNumber = getInputNumber('#depositInput')

    if(isNaN(depositInputNumber)){
        alert('Something went wrong.try later');
    }else{
        
        updateSpantext('#latest-deposit',depositInputNumber)
        updateSpantext('#balance',depositInputNumber)    
        document.querySelector('#depositInput').value = '';
    }
}
//CALCULATE FUNCTION
function updateSpantext(id,depositInputNumber){
    let currentBalance = document.querySelector(id).innerText;
    let currentBalanceNumber = parseFloat(currentBalance);
    let totalBalance = currentBalanceNumber + depositInputNumber;
    document.querySelector(id).innerText = totalBalance;
}

//withdraw amount
function withdrawMoney(){
    let withdrawNumber = getInputNumber('#withdrawAmount');
    updateSpantext('#latest-withdraw',withdrawNumber);
    updateSpantext('#balance', -1 * withdrawNumber);
    document.querySelector('#withdrawAmount').value = '';
}
//parseFloat Function
function getInputNumber(id){
    let withdrawAmount = document.querySelector(id).value;
    let withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}




//UI FUNCTION
function nextItem(e){
    let parentElement = form.parentElement.parentElement;
    let dashboard = document.querySelector('.dashboard');
    if(confirm("Are You Remove?")){
        parentElement.style.display = 'none';
        dashboard.style.display = 'grid';
        
    }
    e.preventDefault();
}