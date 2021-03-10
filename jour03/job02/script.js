// Shuffle an array and return it
let shuffle = function (){
    let array = [0,1,2,3,4,5]
    array = array.sort(() => Math.random() - 0.5)
    return array
}

// Shuffle pics in div 'melangee' on click
$('#button').on('click',function (e){
    let allPics = $('#rangees img');
    let shuffleArray = shuffle()
    for (let i = 0 ; i < shuffleArray.length; i++){
       let pic = allPics[shuffleArray[i]];
            $('#melangees').append(pic)
    }
})

var pics = $('.arc')
pics.on('click',function (e){
    // IMPORTANT attr permet de récup les attribut ici This fait reference à l'image cliqué
    //On récupere donc l'Id de l'element de classe .arc cliqué
    let picID = $(this).attr("id")
    //Format selector and append it into div rangees
    $('#rangees').append($('#'+picID))
    // Control final
    var div;
    if ($('#rangees > img').length === 6) {
        if ($('#rangees img:first-child').attr("id") === 'arc1' && $('#rangees img:nth-child(2)').attr("id") === 'arc2' && $('#rangees img:nth-child(3)').attr("id") === 'arc3' && $('#rangees img:nth-child(4)').attr("id") === 'arc4' && $('#rangees img:nth-child(5)').attr("id") === 'arc5' && $('#rangees img:nth-child(6)').attr("id") === 'arc6') {
            $("#rangees").after("<p>Vous avez gagné!</p>").addClass('green')
            $('p').css('color','green');

        } else {
            $("#rangees").after("<p>Vous avez perdu!</p>")
            $('p').css('color','red');
        }
    }
})



