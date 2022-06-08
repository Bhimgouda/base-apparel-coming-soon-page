const email = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const content = document.querySelector('.content')
const hero = document.querySelector('.hero');


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let userEmail = email.value.split('');
    let condition1 = false;
    let condition2 = false;
    let condition3 = false;
    if(userEmail.includes('@')) condition1 = true;
    if(userEmail.includes('.') && condition1 === true) condition2 = true;
    if(condition1 === true && condition2 === true && userEmail[userEmail.length-1] !== '.') condition3 = true;
    if(!(condition1 && condition2 && condition3)) {
        content.classList.add('email-error');
        setTimeout(()=>{
            content.classList.remove('email-error')
        },1500)
    }
    else {
        setTimeout(()=>{
            hero.classList.add('thankyou-visible');
        },500)
       
    }
})