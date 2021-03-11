// Créez une base de données “utilisateurs” contenant une table “utilisateurs”
// et ayant comme champs “id”, “nom”, “prenom” et “email”. Ajoutez des
// utilisateurs à l’aide de phpmyadmin. Créez une page users.php qui se
// connecte à la base de données, récupère l’ensemble des utilisateurs et
// affiche ces informations au format json.
// Dans votre page index.php, créez un tableau permettant de contenir ces
// informations ainsi qu’un bouton “update”. Sans rafraichir la page, lorsque
// l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir
// l’ensemble des informations des utilisateurs présents dans la base de
// données.
document.querySelector('#button').addEventListener('click', function (e) {
    $.post(
        'user.php', // Le fichier cible côté serveur.
        FetchJson, // Nous renseignons uniquement le nom de la fonction de retour.
        'json' // Format des données reçues.
    );
    function FetchJson(data){
        console.log(data)
    }
})