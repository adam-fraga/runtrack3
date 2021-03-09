
// Put the return of querySelector method in var button
let button = document.querySelector('#button')
//function display content of tag article in consolelog
function citation() {
    console.log(document.querySelector('#citation').innerHTML)
}
//Add Event on button click execute function
button.addEventListener('click',citation)

