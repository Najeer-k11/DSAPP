
const elementsNav = document.getElementsByClassName('nav__item');
const allCont = document.getElementsByClassName('content') ;
console.log(elementsNav);

for(let i=0; i < elementsNav.length ; i++){
    elementsNav[i].addEventListener("click",function(){
        for(let j=0 ; j < elementsNav.length ; j++){
            elementsNav[j].classList.remove("toggled");
            allCont[j].classList.remove("active");
        }
        elementsNav[i].className += " toggled" ;
        allCont[i].classList.add("active")
    })
}