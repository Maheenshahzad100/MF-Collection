let admin_wrapper=document.querySelector('.settings .settings-wrapper .add-new-admin .admin-wrapper');
let add_new_admin=document.querySelector('.settings .settings-wrapper .add-new-admin');
let admin_form=document.querySelector('.settings .settings-wrapper .add-new-admin .admin-form');
let add_admin_btn=document.querySelector('.settings .settings-wrapper .add-new-admin .new-admin-div button');
let cancel_admin=document.querySelector('.cancel');
add_admin_btn.addEventListener('click',()=>{
   admin_wrapper.style.height='650px';
add_new_admin.style.height='650px';
admin_form.style.display="flex";
})
cancel_admin.addEventListener('click',()=>{
   admin_wrapper.style.height='250px';
add_new_admin.style.height='400px';
admin_form.style.display="none";
})