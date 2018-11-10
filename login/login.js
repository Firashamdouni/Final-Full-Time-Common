document.getElementById('toggle').addEventListener('click',flip)
function flip(){
  document.getElementById('card').style.transform='rotateY(180deg)'
  document.getElementById('card').style.transition='transform 0.8s'
  document.getElementById('card').style.transformStyle='preserve-3d'
  document.getElementById('back').style.transform='rotateY(180deg)'
  // document.getElementById('back').style.backfaceVisibility='hidden'

  document.getElementById('front').style.display='none'
  document.getElementById('back').style.display='block'

}

document.getElementById('toggleback').addEventListener('click',flipback)
function flipback(){
  document.getElementById('back').style.display='none'
  document.getElementById('front').style.display='block'
  document.getElementById('card').style.transform='rotateY(360deg)'
  document.getElementById('card').style.transition='transform 0.8s'
  document.getElementById('card').style.transformStyle='preserve-3d'
  // document.getElementById('front').style.backfaceVisibility='hidden'
}



var password = document.getElementById("password");
var confirm_password = document.getElementById("repassword");
var email = document.getElementById("email");
var name = document.getElementById("firstname");
function validatePassword(){
  if(password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
   document.getElementById('alert_passconfirm').style.display="block";
   document.getElementById("repassword").style.border=" 1px solid orangered";
  } else{
    confirm_password.setCustomValidity("");
    document.getElementById('alert_passconfirm').style.display="none";

    document.getElementById("repassword").style.border="1px solid green";
  }
}
function validateEmail(){
  if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]+[a-z]{2})*$/.test(email.value)===false){
    document.getElementById('alert_email').style.display="block";
    document.getElementById("email").style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_email').style.display="none";
   email.style.border="1px solid green";
  }
}
function validatePass(){
  if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value)===false){
    document.getElementById('alert_pass').style.display="block";
    document.getElementById("password").style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_pass').style.display="none";
   password.style.border="1px solid green";
  }
}
function ValidateName(){
  if(/[A-Za-z]^.{4,}/.test(name.value)===false){
    document.getElementById('alert_name').style.display="block";
    name.style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_name').style.display="none";
   name.style.border="1px solid green";
  }
}



function CheckPassword(){
  let a =document.getElementById('pass').value;
  if (a !== "Gomycode123" && document.getElementById('mail12').value!=="gomycode@yahoo.fr"){
 document.getElementById('alert12').style.display="block"; }
 else{
    document.getElementById('form12').action="../profil/accueil.html"
 }
 
}
name.onkeyup=ValidateName;
password.onkeyup=validatePass;
email.onkeyup = validateEmail;
//password.onchange = validatePassword;
repassword.onkeyup = validatePassword;
submit12.onclick=CheckPassword;

  //  document.getElementById('aaa').onload=disable;
   document.getElementById('navigation__button').onclick=display;
// // /*******************/
  function display(event){
     let i = 0;
     let a;
    if(event.target.id =='navigation__button')
    {  
      i++
      alert(i);
       document.getElementById('home').style.pointerEvents="auto";
       document.getElementById('annonce').style.pointerEvents="auto";
       document.getElementById('contact').style.pointerEvents="auto";
     }

    }
    // function disable(event){
    //   if(event.target.id !='navigation__button'){
    //   document.getElementById('home').style.pointerEvents="none";
    //   document.getElementById('annonce').style.pointerEvents="none";
    //   document.getElementById('contact').style.pointerEvents="none";
    // }
   // }
  // else{
  //   document.getElementById('home').style.pointerEvents="none";
  //   document.getElementById('annonce').style.pointerEvents="none";
  //   document.getElementById('contact').style.pointerEvents="none";
  // }
   
//   }
    // function disable(event){
    //   if(event.target.id != "navigation__button")
    //   {  
    //     alert('bbb');
    //     document.getElementById('home').style.pointerEvents="none";
    //     document.getElementById('annonce').style.pointerEvents="none";
    //     document.getElementById('contact').style.pointerEvents="none";
    //    }
    // }
 
 
  
    //   function dissplay(event){
   
    //     }
     
  

//  function myFunction(event) { 
//   let a = event.target.id;
//   if(a==='navigation__icon'){
//     document.getElementById('navigation').style.display="block";
//   } else{
//     document.getElementById('navigation').style.display="none";
//   }
// }
