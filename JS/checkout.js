document.addEventListener('DOMContentLoaded', () => {
  const autofocus_input = document.querySelector('.checkout .checkout-info .info-wrapper form .contact .inputs input');
  if (autofocus_input) {
    autofocus_input.focus();
  }
});


let karachi=document.querySelector('#karachi');
let other_city=document.querySelector('#other_city');
let cod=document.querySelector('#cod-div');
let bank_deposit=document.querySelector('#bank_deposit-div');
let radio_inputs=document.querySelectorAll('.radio-input')
let bank_info=document.querySelector('.checkout .checkout-info .info-wrapper form .payment-method  .collapse-div .bank-info');
let payment_box=document.querySelector('.checkout .checkout-info .info-wrapper form .payment-method');
let shipping_amount=document.querySelector('.checkout .bill .subtotal-main .shipping-amount');
let dc= document.querySelector('.checkout .checkout-info .info-wrapper form .shipping-method .karachi .dc-karachi');
let dc_other_city=document.querySelector('.checkout .checkout-info .info-wrapper form .shipping-method .other-city .dc-other-city ');
let total_in_pkr= document.querySelector('.checkout .bill .subtotal-main .subtotal-children .pkr h1 span')
let orders= document.querySelectorAll('.checkout .bill .order-summary .order');
let quantity=document.querySelector('.checkout .bill .subtotal-main .subtotal .quantity')
let subtotal_money=document.querySelector('.checkout .bill .subtotal-main .subtotal .subtotal-money')
let total_bill =0;

radio_inputs.forEach((radio_input)=>{
  radio_input.addEventListener('change',()=>{
  if(radio_input.id==='radio1'){
karachi.style.border="1px solid var(--color-btn-link-icons-hover)";
karachi.style.backgroundColor='rgba(166, 12, 56, 0.084)';
other_city.style.border="1px solid rgba(0,0,0,0.2)";
other_city.style.backgroundColor='var(--color-background)';
shipping_amount.textContent = dc.textContent;
bill()
;
  }
 else if(radio_input.id==='radio2'){

other_city.style.border="1px solid var(--color-btn-link-icons-hover)";
other_city.style.backgroundColor='rgba(166, 12, 56, 0.084)';
karachi.style.border="1px solid rgba(0,0,0,0.2)";
karachi.style.backgroundColor='var(--color-background)';

shipping_amount.textContent = dc_other_city.textContent;
bill();
  }

  else if(radio_input.id==='cod'){

 cod.style.border="1px solid var(--color-btn-link-icons-hover)";
cod.style.backgroundColor='rgba(166, 12, 56, 0.084)';
bank_deposit.style.border="1px solid rgba(0,0,0,0.2)";
bank_deposit.style.backgroundColor='var(--color-background)';
  bank_info.style.display="none";
bank_info.style.top="-6vh";

payment_box.style.height="fit-content";

  }

  else if(radio_input.id==='bank_deposit'){
    bank_deposit.style.border="1px solid var(--color-btn-link-icons-hover)";
bank_deposit.style.backgroundColor='rgba(166, 12, 56, 0.084)';
cod.style.border="1px solid rgba(0,0,0,0.2)";
cod.style.backgroundColor='var(--color-background)';
bank_info.style.display="flex";
bank_info.style.top="0";
payment_box.style.height="70vh";

  }
})
})



function bill(){
  let total=0;
  orders.forEach((order)=>{
if(orders.length==1){
  quantity.textContent=`Subtotal · ${orders.length} item`
}
else{
    quantity.textContent=`Subtotal · ${orders.length} items`
  
}


order_price = order.querySelector('.order-price span');

order_price_int=parseFloat(order_price.textContent);
order_price.textContent= order_price_int.toFixed(2)
total += order_price_int
subtotal_money.textContent= total.toFixed(2)

let dc_in_int=parseFloat(shipping_amount.textContent);
total_bill=total+dc_in_int
total_in_pkr.textContent= total_bill.toFixed(2)
}


)
}
bill();



if(orders.length>1){
    dc_other_city_in_int=parseFloat(dc_other_city.textContent);
dc_other_city.textContent=(dc_other_city_in_int+(50*(orders.length-1))).toFixed(2)
}

document.querySelector('form').addEventListener('submit',()=>{
  let codSelected=document.querySelector('#cod').checked;
  localStorage.setItem('payment method',codSelected ? 'COD' : 'Bank Deposit');
})