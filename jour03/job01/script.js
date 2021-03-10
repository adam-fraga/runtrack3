
//Insert tag paragraphe and display a sentence into the top of body
$('#button').on('click',function (e){
  let paragraphe = document.createElement('p');
  paragraphe.textContent = "le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la\n" +
      "classe pour cacher cet élément.";
        document.body.prepend(paragraphe)
})

//turn off the display of the sentence
$('#buttonOff').on('click',function (e) {
    $("p").addClass('paragraphe');
    $('.paragraphe').css('display','none')
})
