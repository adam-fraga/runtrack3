<?php
session_start();

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

    /**
     * @param $mail
     * @return bool
     */
    public function checkMail($mail): bool
    {
        $this->secureEnry($mail);

        $Pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
        $sql = "SELECT * FROM  utilisateurs";
        $result = $Pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        foreach ($result as $item) {
            if ($item['email'] === $mail) {
                return false;
            }
        }
        return true;
    }

    /** Prends en parametre les entrée utilisateur et l'inscrit en BDD
     * @param array $POST tableau renvoyé par $_POST inscription
     * @return bool
     */
    public function inscription(array $POST)
    {
        //vire le champs boutton
        $SendButton = array_pop($POST);
        $confpass = array_pop($POST);
        $i = 1;
        $sql = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?,?,?,?)";
        $Pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
        $stmt = $Pdo->prepare($sql);
        foreach ($POST as $key => $val) {
            if ($key === 'password') {
                $val = password_hash($val, CRYPT_BLOWFISH);
            }
            $val = $this->secureEnry($val);
            $stmt->bindValue($i, $val);
            $i++;
        }
        return $stmt->execute();
    }

    /**Check la connexion utilisateur si connecté assigne une variable de session avec les infos utilisateur
     * et le status "connexion" reglé a "true"
     * @param $POST
     * @return string
     */
    public function checkConnexion($POST): string
    {
        $email = $this->secureEnry($POST['email']);
        $password = $this->secureEnry($POST['password']);
        $sql = "SELECT * FROM utilisateurs.utilisateurs WHERE email ='$email'";
        $Pdo = new PDO('mysql:database=utilisateurs;host=localhost', 'root', '');
        $result = $Pdo->query($sql)->fetch(PDO::FETCH_ASSOC);
        if ($result != false) {
            if (password_verify($password, $result['password'])) {
                $_SESSION['user']['id'] = $result['id'];
                $_SESSION['user']['prenom'] = $result['prenom'];
                $_SESSION['user']['nom'] = $result['nom'];
                $_SESSION['user']['email'] = $email;
                $_SESSION['user']['connexion'] = true;
                header('location:index.php');
            }
        } else return "Identifiant ou mot de passe incorect";

    }
}
