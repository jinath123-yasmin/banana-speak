var btnTranslate = document.querySelector("#btn-translator");
var textInput= document.querySelector('#input-text');
var userOutput= document.querySelector('#output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
  return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

 function clickEventHandler() {

  var inputText = textInput.value;
  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
      var translatedText = json.contents.translated;
      userOutput.innerText = translatedText; })
  .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickEventHandler);
  