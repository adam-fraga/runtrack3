
let button = document.querySelector('#button');

    //On click use function showhide
    button.addEventListener('click', function(event) {
    showhide()
})

// function disabled node article if exist, else create a new article
function showhide() {
        if (document.querySelector('article')){
            //stock parent node for delete his child (article)
            let body = document.body;
            body.removeChild(document.querySelector('article'))
        }
        else{
    let body = document.body;
    //Create an article tag in the DOM
    let article = document.createElement('article');
    //Insert text in an article
    article.textContent = 'L\'important n\'est pas la chute, mais l\'atterrissage.';
            // insert node article in the DOM
            body.prepend(article);
        }
    }