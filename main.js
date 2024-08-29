const bouton = document.g
queryselectorAll("button") ;

console.log(bouton)

let tabCouleur = ['blue' ,'red','rgba(85, 88, 117, 1)' , '#2C6924','#C27659', 'rgba(214, 2, 232, 1)', '#E6E802' ,'#02CCE8','#FFA810'];

  document.addEventListener( 'click' , changer )
  function changer()   {
    document.bouton.style.backgroundColor = tabCouleur[Math.round(Math.random()*tabCouleur.length)].value;
  }
  changer();

document.bouton.style.background = tabCouleur[Math.round(Math.random()*tabCouleur.length)].value;


