var btnTranslate = document.querySelector("#btn-translate");
var txtTranslate = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output-box");


/* ES5 version 
  function getUrl(text) {
    var url = "https://api.funtranslations.com/translate/minion.json"
    return url + "?text=" + text
}
*/

//ES6+ version 
const getUrl = text=> `https://api.funtranslations.com/translate/minion.json?text=${text}`;

// ES5 Version
// function clicked() {
//     var userInput = txtTranslate.value;
//     fetch(getUrl(userInput)).then(response => response.json()).then(json => outputBox.innerText = json.contents.translated);
// }


// ES6+ version
const clicked = _=>{
let userInput = txtTranslate.value;
fetch(getUrl(userInput)).then(response => response.json()).then(json => outputBox.innerText = json.contents.translated);
};

btnTranslate.addEventListener("click", clicked);


