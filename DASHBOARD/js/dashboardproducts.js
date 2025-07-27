let add_pr_btn=document.querySelector('.products-management .add-product_btn button');
let pr_form=document.querySelector('.products-management .product-form');
let cancel_btn=document.querySelector('.products-management .product-form form  .save-btn-div button[type="button"]')
add_pr_btn.addEventListener('click', ()=>{
pr_form.style.display="flex";
})
cancel_btn.addEventListener('click',()=>{
    pr_form.style.display="none";

})