



let approve_btns=document.querySelectorAll('.reviews-management .reviews-wrapper .review-box .approve-or-not .approve-div ');
let review_boxes=document.querySelectorAll('.reviews-management .reviews-wrapper .review-box');
let delete_divs=document.querySelectorAll('.reviews-management .reviews-wrapper .review-box .approve-or-not .delete-div');
let approve_p=document.querySelectorAll('.reviews-management .reviews-wrapper .review-box .approve-or-not .approve-div p');

  



approve_btns.forEach((approve_btn,index)=>{
approve_btn.addEventListener('click',()=>{
 let confirmed=   confirm('Review Approved!')
 if(confirmed){
    review_boxes[index].style.backgroundColor=' #16c72e17';
delete_divs[index].innerHTML="";
approve_p[index].textContent="Approved";


 }
})
}) 
