
// Evenement click button
$('#filter').on('click', function (event) {
// Requete Ajax sur pokemon.json
    $.ajax({
        url: 'pokemon.json',
        type: 'GET',
        dataType: 'json',
    }).done(function (json) {
        // Recup valeur des input et les stock dans des variables
        let pkmnID = $("#id")[0].value;
        let pkmnName = $('#nom')[0].value;
        let pkmnType = $('#type')[0].value;

        //For in parcourt mon objet Json
        for (let key in json) {
                console.log(json[key]['type'])
            // Condition de Recup pokemons
            if (pkmnName === json[key]['name']['french'] || pkmnName === json[key]['name']['english'] || pkmnName === json[key]['name']['japanese'] || pkmnName === json[key]['name']['chinese']) {
                let div = document.createElement("div")
                div.innerHTML="Nom Français:"+json[key]['name']['french']+'<br>'+"Nom Anglais:"+json[key]['name']['english']+'<br>'+"Numero:"+json[key]['id']+'<br>'+"Type:"+json[key]['type'][0]+' '+json[key]['type'][1]+'<br>'+'<br>';
                document.body.append(div);
            } else if (pkmnID == json[key]['id']) {
                let div = document.createElement("div")
                div.innerHTML="Nom Français:"+json[key]['name']['french']+'<br>'+"Nom Anglais:"+json[key]['name']['english']+'<br>'+"Numero:"+json[key]['id']+'<br>'+"Type:"+json[key]['type'][0]+' '+json[key]['type'][1]+'<br>'+'<br>';
                document.body.append(div);
            } else if (pkmnType === json[key]['type'][0] || pkmnType === json[key]['type'][1]) {
                let div = document.createElement("div")
                div.innerHTML="Nom Français:"+json[key]['name']['french']+'<br>'+"Nom Anglais:"+json[key]['name']['english']+'<br>'+"Numero:"+json[key]['id']+'<br>'+"Type:"+json[key]['type'][0]+' '+json[key]['type'][1]+'<br>'+'<br>';
                document.body.append(div);
            }
        }

    })
})



