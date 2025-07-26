let loader_content=document.querySelector('#loader-content');
let page_loader=document.querySelector('#page-loader');
window.onload=()=>{
page_loader.style.display="none";
loader_content.style.display="block";
}

let menubtn=document.querySelector('.menu-btn');
  let nav2=document.querySelector('.nav2');
  let nav2as=document.querySelectorAll('.animate__animated')

menubtn.addEventListener('click',()=>{


nav2.style.right='0px';
nav2.style.transition = "right 2s ";
document.body.style.overflow = 'hidden';
  nav2as.forEach((nav2a)=>{
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