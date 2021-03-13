<?php
include_once 'User.php';
$User = new User; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php if (isset($_SESSION['user']['connected'])): ?>
    <article>
        <h1>Bonjour <?= $User->getNom() ?></h1>
    </article>
<?php else: ?>
    <article>
        <h1>Bienvenue visiteur!</h1>
        <a href="inscription.php">S'inscrire</a>
        <a href="connexion.php">Se connecter</a>
    </article>
<?php endif; ?>
<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>