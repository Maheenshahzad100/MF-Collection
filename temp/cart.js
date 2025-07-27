
    let increament_btns=document.querySelectorAll('.cart-section .main-content .products .products-wrapper .flex1 .cart-about .products-no-div .btns-div .inc');
let decreament_btns=document.querySelectorAll('.dec');
let cart_price_paragraphs=document.querySelectorAll('.cart-section .main-content .products .products-wrapper .cart-price p')
let no_of_order=document.querySelectorAll('.no-of-order');
let hidden_total=document.querySelector('#hidden-total');

decreament_btns.forEach(decreament_btn =>{
   decreament_btn.addEventListener('click',()=>{
 let number_btn=decreament_btn.nextElementSibling;

let current_value=parseFloat(number_btn.textContent);
number_btn.textContent=current_value-1;
let form=number_btn.closest('form');
let quantity=form.querySelector('input[type="hidden"][name="quantity"]')
quantity.value=number_btn.textContent

if(number_btn.textContent==0 && quantity.value==0){
   number_btn.textContent=1;
   quantity.value=1;
}

amount()
total();
   })
})
increament_btns.forEach(increament_btn => {
   increament_btn.addEventListener('click',()=>{
let number_btn=increament_btn.previousElementSibling;
let current_value=parseFloat(number_btn.textContent);
number_btn.textContent=current_value+1;
let form=number_btn.closest('form');
let quantity=form.querySelector('input[type="hidden"][name="quantity"]')
quantity.value=number_btn.textContent


amount();
total();
})
   })



function amount(){
  for(let i=0;i<cart_price_paragraphs.length;i++){
    let data=parseFloat(cart_price_paragraphs[i].dataset.basePrice);
    let quantity=parseInt(no_of_order[i].textContent);
    let result=data*quantity;
 cart_price_paragraphs[i].textContent=result.toFixed(2);

  }
}

function total(){
   let subtotal_p=document.querySelectorAll('.cart-section .main-content .order-note .order-note-form .subtotal-div p');
   let last_p=subtotal_p[1]
let total=0
cart_price_paragraphs.forEach(cart_price_paragraph =>{
let number_value=parseFloat(cart_price_paragraph.textContent)

total+=number_value

})
last_p.textContent=`Rs. ${total}.00`;
hidden_total.value=total
}
total();




























