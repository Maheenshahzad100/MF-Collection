let show_availablity=document.querySelector('.availability');
let main_div=document.querySelector('.available')
let in_out_stock_div=document.querySelector('.show-available');
isshown=false;
show_availablity.addEventListener('click',()=>{
if(!isshown){
    in_out_stock_div.style.position="relative"
in_out_stock_div.style.bottom="2vh"
in_out_stock_div.style.zIndex="3"
show_availablity.style.borderBottom="none"
main_div.style.height="auto"
in_out_stock_div.style.opacity="100"
isshown=true
}
else{
in_out_stock_div.style.zIndex="1"



setTimeout(() => {
        in_out_stock_div.style.bottom="12vh"
       
in_out_stock_div.style.opacity="0"
show_availablity.style.borderBottom="1px solid #EDEDED"
}, 300);
setTimeout(()=>{
     main_div.style.height="10vh"
},600)
isshown=false

}

})
// position: absolute;
// top: 12vh;
// z-index: 1;