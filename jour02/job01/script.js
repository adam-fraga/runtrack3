// stock node button in 'button'
var button = document.querySelector('#button')

//Function display node article who contain id class citation
var citation = function () {
    console.log(document.querySelector('#citation'))
}
//Add event on click on button, who display node citation on click
button.addEventListener('click', citation)