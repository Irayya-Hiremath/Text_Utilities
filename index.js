var inputWords = document.querySelector("#inputText");
var getWord;
var convertUpper;

    function upperCase() {

        getWord = inputWords.value;
        convertUpper = getWord.toUpperCase();
        inputWords.value = convertUpper;
    }


    function lowerCase() {

        getWord = inputWords.value;
        convertUpper = getWord.toLowerCase();
        inputWords.value = convertUpper;
    }

    let charLength = document.querySelector("#textLength");
    let timetoRead = document.querySelector("#timetoRead");

    let word;
    function wordsCount(e) {
        character = e.target.value;
        let words = character.split(" "); 
         charLength.innerHTML =  "Number of Characters" +  " " + character.length + " " +"Number of words" +" " +words.length;
         timetoRead.innerHTML =  "Time to read  wordsds" + " " + words.length*0.008
        //   console.log(word.length);
        //   console.log(word.split().length);
    }
    let keypress=document.getElementById('inputText').addEventListener('keyup',wordsCount)
          

