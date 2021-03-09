// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.
    document.addEventListener('keydown',function (event){
        let textArea = document.querySelector('#keylogger')
        let touche = event.key
        textArea.append(touche)
        if (textArea.focus){
            textArea.append(touche)
        }
    })