// Prenez ce logo de La Plateforme_, découpez le en 9 images de tailles
// égales, supprimez un des angles et réalisez le jeu du taquin.
//     Le plateau de jeu est initialisé de façon aléatoire.
//     Lorsque l’image est correctement recomposé, le message “Vous avez
// gagné” s’affiche en vert et bloque la partie. Un bouton “Recommencer”
// apparaît et permet de relancer une partie.
//     GL&HF.

// Mise en forme du tab
$('#plateau').css({"display": "flex", "flex-wrap": "wrap", "width": "606px", "height": "501px"});
$('#plateau > .case').css("margin-right", "2px");

// Initialisation
for (let i = 0; i < 50; i++){
    let randomInt = Math.floor(Math.random() * 10);
    console.log(randomInt);
}
