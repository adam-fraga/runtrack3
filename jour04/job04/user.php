<?php
//Objet PDO
$pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
//Query
$sql = "SELECT * FROM utilisateurs";
//Array of user
$usersArray = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
//Encode array au format JSON
$UserJson = json_encode($usersArray);
$_POST['JSON']=$UserJson;
?>
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
<?= $UserJson ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>
