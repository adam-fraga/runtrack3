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
<form id="form_inscription" action="#" method="post">
    <fieldset id="field">
        <legend>Formulaire d'inscription</legend>
        <div id="cont_nom">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" name="nom" placeholder="Entrez votre Nom"  required
                   maxlength="20">
        </div>
        <div id="cont_prenom">
            <label for="prenom">Prénom:</label>
            <input type="text" id="prenom" name="prenom" placeholder="Entrez votre Prénom"
                   required
                   maxlength="20">
        </div>
        <div id="cont_email">
            <label for="email">Adresse e-mail:</label>
            <input type="email" id="email" name="email" placeholder="nom.prenom@example.com" required
        </div>
        <div>
            <label for="password">Mot de passe</label>
            <input type="text" id="password" name="password" placeholder="Entrez votre mot de passe" required>
        </div>
        <div>
            <label for="confirm_password">Confirmer votre mot de passe</label>
            <input type="text" id="confirm_password" name="password" placeholder="Confirmez votre mot de passe">
        </div id="cont_password">
        <div>
            <input id="button_subscribe" name="button" type="submit">
        </div>
    </fieldset>
</form>
<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>