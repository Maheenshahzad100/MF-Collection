let loader_content=document.querySelector('#loader-content');
let page_loader=document.querySelector('#page-loader');
window.onload=()=>{
page_loader.style.display="none";
loader_content.style.display="block";
}

let register_btn=document.querySelector('.register-btn');
let login_btn=document.querySelector('.login-btn');
let loginandregsiter_box=document.querySelector('.loginandregsiter-box')
register_btn.addEventListener('click',()=>{
loginandregsiter_box.classList.remove('show-register');
loginandregsiter_box.classList.add('show-login');
register_btn.style.borderBottom="3px solid var(--color-primary)";
login_btn.style.borderBottom="none";

})
login_btn.addEventListener('click',()=>{
loginandregsiter_box.classList.add('show-register');
loginandregsiter_box.classList.remove('show-login');
login_btn.style.borderBottom="3px solid var(--color-primary)";
register_btn.style.borderBottom="none";
})

let show_passwords=document.querySelectorAll('.loginandregsiter .loginandregsiter-box  form .inputs .password-div abbr lord-icon');
let password_inputs=document.querySelectorAll('.loginandregsiter .loginandregsiter-box  form .inputs .password-div input');
let isShowed=false;
show_passwords.forEach((show_password,index)=>{
       password_inputs[index].addEventListener('keyup',()=>{
     if(!isShowed){
       

         show_password.addEventListener('click',()=>{
password_inputs[index].type = "text";
password_inputs[index].style.fontSize="1rem";
isShowed=true;
  
 })
     }  

       else{
    
    password_inputs[index].type = "password";
password_inputs[index].style.fontSize="1.2rem";
isShowed=false;
   }
     }) 
 

})