<?php

class User
{
    private $nom;
    private $prenom;
    private $email;
    private $password;

    /* GETTER ET SETTER */

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**Prent en parametre une valeur entré par un utilisateur et la sécurise
     * @param $val *Entrée utilisateur sécurisé
     * @return string Entrée utilisateur securisé
     */
    public function secureEnry($val)
    {
        $secure1 = strip_tags($val);
        $secure2 = htmlspecialchars($secure1);
        $secure3 = stripslashes($secure2);
        return trim($secure3);
    }

    /** Prends en parametre les entrée utilisateur et l'inscrit en BDD
     * @param array $POST tableau renvoyé par $_POST inscription
     */
    public function inscription(array $POST)
    {
        $i = 1;
        $sql = "INSERT INTO utilisateurs (nom, prenom, email, password)VALUES (?,?,?,?)";
        $Pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
        $stmt = $Pdo->prepare($sql);
        foreach ($POST as $key => $val) {
            if ($key === 'password') {
                $val = password_hash($val, CRYPT_BLOWFISH);
            }
            $val = $this->secureEnry($val);
            $stmt->bindValue($i, $val);
        }
        $stmt->execute();
    }

}