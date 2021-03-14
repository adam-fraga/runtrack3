<?php
include_once 'User.php';

$User = new  User();
$User->checkConnexion($_POST);
