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
<form id="#form" action="#" method="get">
    <div>
        <label for="id">Id</label>
        <input type="text" id="id" name="id">
    </div>
    <div>
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom">
    </div>
    <div>
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value="">--Choisissez une option--</option>
            <option value="Water">Eau</option>
            <option value="Grass Poison">Poison</option>
            <option value="Fire Fairy">Feu</option>
            <option value="Electric">Electrique</option>
            <option value="Normal">Normal</option>
            <option value="Fighting">Goldfish</option>
            <option value="Ghost">Fantôme</option>
            <option value="Psychic">Psy</option>
            <option value="Ice">Glace</option>
            <option value="Dragon">Dragon</option>
            <option value="Flying">Vol</option>
            <option value="Rock">Pierre</option>
            <option value="Bug">Insecte</option>
        </select>
    </div>
    <div>
        <input id="filter" type="button" name="filter" value="filter">
    </div>
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>