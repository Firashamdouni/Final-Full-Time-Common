//  document.getElementById('aaa').onload=display;
 document.getElementById('navigation__button').onclick=display;
 // /*******************/
   function display(event){
     if(event.target.id =="navigation__button"){
        document.getElementById('login').style.pointerEvents="auto";
        document.getElementById('signup').style.pointerEvents="auto";
         document.getElementById('annonce').style.pointerEvents="auto";
        document.getElementById('contact').style.pointerEvents="auto"; 
       }
      
      }