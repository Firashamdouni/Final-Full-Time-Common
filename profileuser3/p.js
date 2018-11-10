document.getElementById('navigation__button').onclick=display;
// // /*******************/
  function display(event){
    if(event.target.id == 'navigation__button')
    {  
        document.getElementById('accueil').style.pointerEvents="auto";
        document.getElementById('home').style.pointerEvents="auto";
       document.getElementById('profile').style.pointerEvents="auto";
       document.getElementById('annonce').style.pointerEvents="auto";
       document.getElementById('contact').style.pointerEvents="auto";
     }

    }