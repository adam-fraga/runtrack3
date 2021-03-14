/*
 Commencez par créer une base de données “utilisateurs” contenant une
 table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom”, “email” et
 password.
     Ensuite, créez une page d’accueil qui contient un paragraphe “Bonjour
 $prenom” si l’utilisateur est connecté, sinon deux liens vers une page
 “inscription.php” et une page “connexion.php”. Ces deux pages permettent
 aux utilisateurs de créer un compte et de se connecter. L’ensemble des
 vérifications habituelles doivent se faire sans rafraîchissement de la page.
 (Prénom/Nom renseignés, mots de passe identiques et suffisamment
 complexes, adresse email déjà prise, au bon format...) Un message lié à
 chaque erreur doit être affiché en dessous du formulaire le cas échéant.
     Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de
 connexion. Lorsqu’il se connecte, il est renvoyé vers la page d’accueil.
*/


/**
 *Objet UserInfos contient les infos utilisateur ainsi que les methodes de vérifications des informations posté
 * et de la requête AJAX
 * @param {string}  nom string representant le nom de l'utilisateur
 * @param {string} prenom string représentant le prénom de l'utilisateur
 * @param {string} email string représentant l'email utilisateur
 * @param {string} password string représentant le paassword utilisateur
 * @param {string} confirm_password same
 * @constructor
 */
let UserInfos = function (nom = undefined, prenom = undefined, email = undefined, password = undefined, confirm_password = undefined) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.confirm_password = confirm_password;
}

UserInfos.prototype.passMatch = function (password, confirm_password) {
    if (password !== confirm_password) {
        let error = document.createElement('p');
        error.innerHTML = "Vos mot de passes ne correspondent pas.";
        let container = document.querySelector('#field');
        container.append(error);
        error.classList.add('error');
        //NE pas oublié css method de Jquery
        $('.error').css("color", "red");
        return false;
    } else return true
}

UserInfos.prototype.passComplexity = function (password) {
    let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (regPass.test(password) === false) {
        let error = document.createElement('p');
        error.innerHTML = "Votre mot de passe doit contenir au minimum 8 caractères, une lettre majuscule,une minuscule, un chiffre et un caractère spécial";
        let container = document.querySelector('#field');
        container.append(error);
        error.classList.add('error');
        //NE pas oublié css method de Jquery
        $('.error').css("color", "red");
        return false;
    } else return true;
}

UserInfos.prototype.emailValid = function (email) {
    let regMail = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,}$/
    if (regMail.test(email) === false) {
        let error = document.createElement('p');
        error.innerHTML = "Votre Adresse email est invalide";
        let container = document.querySelector('#field');
        container.append(error);
        error.classList.add('error');
        //NE pas oublié css method de Jquery
        $('.error').css("color", "red");
        return false;
    } else return true;
}

UserInfos.prototype.makeRequest = function (Method, URL) {
    let httpRequest = new XMLHttpRequest();
    if (!XMLHttpRequest) {
        alert("Impossible d'instancié XmlHttpRequest")
        return false
    }
    httpRequest.onreadystatechange = request
    httpRequest.open(Method, URL, true);
    httpRequest.send();

    function request() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200)
                console.log(httpRequest.response)
        }
    }
}


isSubValid = function (e) {
    let prenom = document.querySelector('#prenom');
    let nom = document.querySelector('#nom');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirm_password = document.querySelector('#confirm_password');
    let Usr = new UserInfos(prenom.value, nom.value, email.value, password.value, confirm_password.value);
    let test = Usr.passMatch(Usr.password, Usr.confirm_password);
    let test2 = Usr.passComplexity(password.value);
    let test3 = Usr.emailValid(email.value);
    if (test && test2 && test3) {
        let request = Usr.makeRequest('POST', 'verif_sub.php')
    } else {
        e.preventDefault();
        document.querySelector('#button_subscribe').removeEventListener('submit', isSubValid);
    }
}
// Event sur soumission de formulaire inscription
document.querySelector('#button_subscribe').addEventListener('submit', isSubValid);

function isConnValid(e) {
    let Usr = new UserInfos();
    Usr.makeRequest('POST', 'verif_conn.php');
}

//Event sur soumission de formulaire connexion
document.querySelector('#button_subscribe').addEventListener('submit', isConnValid);
