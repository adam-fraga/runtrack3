<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<header id="header">
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Accueil</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="index.php  ">Connexion</a></li>
                <li><a href="index.php  ">Inscription</a></li>
                <li><a href="index.php  ">Rechercher</a></li>
            </ul>
        </div>
    </nav>
</header>
<main>
    <!--    FORM-->
    <div class="row">
        <form class="col s12">
            <div class="container">
            <div class="input-field col s6">
                <input placeholder="Votre Prénom" id="first_name" type="text" class="validate">
                <label for="first_name">Prénom</label>
            </div>
            <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" placeholder="Votre nom">
                <label for="last_name">Nom</label>
            </div>
            <div class="input-field col s12">
                <input id="last_name" type="text" class="validate" placeholder="Votre adresse">
                <label for="last_name">Adresse</label>
            </div>
            <div class="input-field col s12">
                <label>
                    <input type="radio" name="group1">
                    <label for="last_name">Sexe</label>
                </label>
            </div>
            <div class="input-field col s12">
                <label>
                    <input type="radio" name="group1">
                    <span>Homme</span>
                </label>
            </div>
            <div class="input-field col s12">
                <label>
                    <input type="radio" name="group1">
                    <span>Femme</span>
                </label>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">
                <p>Vos passions</p>
                <div class="input-field col s12">
                    <label>
                        <input type="checkbox" checked="checked"/>
                        <span>Informatique</span>
                    </label>
                </div>
                <div class="input-field col s12">
                    <label>
                        <input type="checkbox"/>
                        <span>Voyage</span>
                    </label>
                </div>
                <div class="input-field col s12">
                    <label>
                        <input type="checkbox"/>
                        <span>Sport</span>
                    </label>
                </div>
                <div class="input-field col s12">
                    <label>
                        <input type="checkbox">
                        <span>Lecture</span>
                    </label>
                </div>
            </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            </button>
        </form>
    </div>
</main>
<footer>
</footer>
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>


</body>
</html>