import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   let pronoun = ['the', 'our', 'my', 'your'];
   let adj = ['whimsical', 'magical', 'mesmerizing', 'lovely'];
   let noun = ['space', 'night', 'garden', 'star'];
  
  for (let a = 0; a < 4 ; a++) {
    let pro = pronoun[a]
    for (let b = 0; b < 4 ; b++) {
      let ad = adj[b]
      for (let c = 0; c < 4 ; c++) {
        let nou = noun[c]
        let domain = pro + ad + nou + '.com'
        console.log (domain)
      }
    }
  }

};
