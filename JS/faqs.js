let faq_questions=document.querySelectorAll('.faq1');
   let faq_answers=document.querySelectorAll('.faq-ans1');
   let isCollapsed=false
for(let i=0;i<10;i++){

faq_questions[i].addEventListener('click',()=>{
    if(!isCollapsed){
  faq_answers[i].style.zIndex=11;
     faq_answers[i].style.top="7vh";
  
  }
  else{
 faq_answers[i].style.zIndex=1;
  faq_answers[i].style.top="0";
  }
  isCollapsed=!isCollapsed
})
}

