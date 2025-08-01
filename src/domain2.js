import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  const domainDiv = document.getElementById("domains")
 let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let urls = []
  pronouns.forEach(
    (pronoun)=> {
      adjs.forEach(
        (adj)=>{
          nouns.forEach(
            (noun)=>{
              const finalUrl = pronoun + adj + noun + ".com"
              urls.push(finalUrl)           
            }
          )
        }
      )
     
    }
  )
urls.forEach(
  (Url)=>{
    const domainElement = document.createElement("h3")
    domainElement.textContent = Url
    domainDiv.appendChild(domainElement)
  }
)
  console.log(urls);
};
