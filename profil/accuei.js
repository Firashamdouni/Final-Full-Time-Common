
 document.getElementById('navigation__button').onclick=display;
 // /*******************/
   function display(event){
    let i = 0;
    let a;
     if(event.target.id == "navigation__button" ){
       i++;
         document.getElementById('profile').style.pointerEvents="auto";
        document.getElementById('annonce').style.pointerEvents="auto"; 
        document.getElementById('contact').style.pointerEvents="auto";
        document.getElementById('logout').style.pointerEvents="auto";
       }
    
    }