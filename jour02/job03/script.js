//add one on compteur
let addone = function (){
    let compteur = document.querySelector('#compteur')
    compteur.innerHTML++
}
//on click call function addone
document.querySelector('#button').addEventListener('click', addone)



