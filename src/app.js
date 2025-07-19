import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let url = []
  pronoun.forEach(
    (words)=> {
    url.push(words)
     
    }
  )
  let firstWord = url[0]
  let secondWord = url[1]
  let finalUrl = firstWord + secondWord
  console.log(finalUrl)

  console.log("Hello Rigo from the console!");
};
