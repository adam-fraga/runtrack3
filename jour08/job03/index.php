<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Document</title>
</head>
<body>
<header>
    <nav class="nav-wrapper  cyan lighten-2">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Inscription</a></li>
            <li><a href="#">Connexion</a></li>
            <li><a href="#">Rechercher</a></li>
        </ul>
    </nav>
</header>
<main>
    <section>
        <form action="" method="post">
            <!--            CIVILITE-->
            <fieldset>
                <legend>Civilité</legend>
                <div>
                    <input type="radio" id="femme">
                    <label for="femme">Femme</label>
                </div>
                <div>
                    <input id="homme" type="radio">
                    <label for="homme">Homme</label>
                </div>
            </fieldset>
            <!--            INFOS PERSO-->
            <fieldset>
                <legend>Informations personnels</legend>
                <div>
                    <div>
                        <label for="nom">Nom</label>
                        <input type="text" name="nom" id="nom">
                    </div>
                    <div>
                        <label for="prenom">Prénom</label>
                        <input type="text" id="prenom" name="prenom">
                    </div>
                    <div>
                        <label for="adress">Adresse</label>
                        <input id="adress" type="text" name="adresse">
                    </div>
                    <div>
                        <div>
                            <p>Passions:</p>
                        </div>
                        <div>
                            <label for="informatique">Informatique</label>
                            <input id="informatique" type="checkbox" name="informatique">
                        </div>
                        <div>
                            <label for="sport">Sport</label>
                            <input id="sport" type="checkbox" name="sport">
                        </div>
                        <div>
                            <label for="voyage">Voyages</label>
                            <input id="voyage" type="checkbox" name="voyage">
                        </div>
                        <div>
                            <label for="lecture">Lecture</label>
                            <input id="lecture" type="checkbox" name="lecture">
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Informations de connexion</legend>
                <div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div>
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password">
                    </div>
                    <div>
                        <label for="confPassword">Confirmer mot de passe</label>
                        <input type="password" id="confPassword" name="confPassword">
                    </div>
                    <div>
                        <label for="adress">Adresse</label>
                        <input id="adress" type="text" name="adresse">
                    </div>
                </div>
            </fieldset>
            <div>
                <button type="submit" id="button">Envoyer</button>
            </div>
        </form>
    </section>
</main>
<footer class="navbar-fixed cyan lighten-2">
    <p class="center">Je suis fixé centré et coloré</p>
</footer>
</body>
</html>