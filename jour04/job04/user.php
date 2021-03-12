<?php
//Objet PDO
$pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
//Query
$sql = "SELECT * FROM utilisateurs";
//Array of user
$usersArray = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
//Encode array au format JSON
$UserJson = json_encode($usersArray);
?>

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
    <?= $UserJson ?>
    </body>
    </html>
