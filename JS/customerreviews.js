let sort_icon_btn=document.querySelector('.reviews .sorting-box .sort-icon-btn');
let sort_div=document.querySelector('.reviews .sorting-box .sort');
let reviews_li=document.querySelectorAll('.reviews .sorting-box .sort ul .reviews-li');
let newest_icon=document.querySelector('.newest');
let oldest_icon=document.querySelector('.oldest');
let isOpen=false;
let isTick=false;
sort_icon_btn.addEventListener('click',()=>{
if(!isOpen){
    sort_div.style.display='block';
       

sort_icon_btn.style.backgroundColor= 'var(--color-border)';
isOpen=true;
}
else{
    sort_div.style.display='none';
sort_icon_btn.style.backgroundColor= 'var(--color-background)';

isOpen=false;
}
})
for (let i = 0; i < reviews_li.length; i++) {
  reviews_li[i].addEventListener('click',()=>{
if(!isTick){
    newest_icon.style.display="none";
oldest_icon.style.display="block";
isTick=true
}
else{
    newest_icon.style.display="block";
oldest_icon.style.display="none";
isTick=false
}
  })
    
}
let review_btn=document.querySelector('.reviews .sorting-parent .sorting-box .write-a-review');
let write_review_div=document.querySelector('.reviews .write-review-div');
review_btn.addEventListener('click',()=>{
setTimeout(()=>{
  document.body.classList.add('showbefore');
write_review_div.style.display="block";
   sort_icon_btn.disabled = true;
    sort_div.style.display='none';
},300)
})
let not_submit=document.querySelector('.reviews .write-review-div  form .submit-not-btn .not-submit')
not_submit.addEventListener('click',()=>{
 setTimeout(()=>{
   document.body.classList.remove('showbefore');
  write_review_div.style.display="none";
     sort_icon_btn.disabled = false;
         sort_div.style.display='block';
 },300)
})

