// let cod_radio=document.querySelector('#cod');
// let bank_deposit_radio=document.querySelector('#bank_deposit');
// let instruction=document.querySelector('.checkout .checkout-info .info-wrapper .map-with-instruction .instructions p')

// let ischecked =cod_radio.checked;
// if(ischecked){
// instruction.textContent="hello"
// }
let instructions=document.querySelectorAll('.checkout .checkout-info .info-wrapper .map-with-instruction .instructions p')

instructions.forEach((instruction)=>{
    document.addEventListener('DOMContentLoaded',()=>{
 let payment_method =  localStorage.getItem('payment method');
   if(payment_method=='COD'){
instructions[0].textContent="You Will Receive A Confirmation Text With Your Order Number Shortly"
instruction.textContent=''

   }
   else{
    instructions[0].innerHTML='<p>Bank Deposit Instructions:</p><p>Make the Payment: Deposit the amount to the provided bank account.</p><p>Send Receipt: Share the transaction receipt via WhatsApp/SMS to +92 3158329411 or email maria_mfaisal@hotmail.com</p><p>Order Processing: Your order will be processed upon receipt verification. </p>'
  instruction.innerHTML=''

}
})
})
