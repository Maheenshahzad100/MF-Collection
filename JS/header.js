let loader_content=document.querySelector('#loader-content');
let page_loader=document.querySelector('#page-loader');
window.onload=()=>{
page_loader.style.display="none";
loader_content.style.display="block";
}














let menubtn=document.querySelector('.menu-btn');
  let nav2=document.querySelector('.nav2');
  let nav2as=document.querySelectorAll('.animate__animated')
  let conatctli =document.getElementById('contact-li')
menubtn.addEventListener('click',()=>{


nav2.style.right='0px';
nav2.style.transition = "right 2s ";
document.body.style.overflow = 'hidden';
  nav2as.forEach((nav2a)=>{
    conatctli.style.animation="backInUp";
conatctli.style.animationDuration='3s';
      nav2a.style.animation="backInUp";
  nav2a.style.animationDuration='3s';
nav2a.style.animationDelay='0.5s';
 
})})
let cross = document.querySelector('.cross');
cross.addEventListener('click', () => {
  nav2.style.right = '-500px';
  document.body.style.overflow = 'auto';
});

let iscollapsed=[false,false,false,false]
let collpaseicon=document.querySelectorAll('.collpase-icon');
let collpasebtns=document.querySelectorAll('.collapse');





for (let i = 0; i <= 3; i++) {
   
   collpaseicon[i].addEventListener('click',()=>{
 if(!iscollapsed[i]){
   collpasebtns[i].style.display='block';


 }
else{
   collpasebtns[i].style.display='none';

}
    
 iscollapsed[i]=! iscollapsed[i]



  }
)

}





    
