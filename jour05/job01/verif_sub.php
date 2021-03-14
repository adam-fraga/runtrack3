<?php
session_start();
include_once 'User.php';
$User = new User();
$checkmail = $User->checkmail($_POST['email']);
?>
<?php if ($checkmail === true):
    $subscribe = $User->inscription($_POST); ?>
    <?php header('location:connexion.php') ?>
<?php else: ?>
    <script>alert('Votre adresse email est déja utilisé')</script>
    <a href="inscription.php">Retourner sur la page d'inscription</a>
<?php endif ?>