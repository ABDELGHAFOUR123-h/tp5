
const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien de pattes a un chat ?", "4"],
    ["Quelle langue parle-t-on au Brésil ?", "Portugais"],
    ["Combien font 5 + 3 ?", "8"],
    ["Quel est le plus grand océan du monde ?", "Pacifique"]
  ];
  
  function lancerQuiz() {
    let score = 0;
  
    for (let i = 0; i < QUESTIONS.length; i++) {
      let question = QUESTIONS[i][0];
      let bonneReponse = QUESTIONS[i][1].toLowerCase();
      let reponseUtilisateur = prompt(question).trim().toLowerCase();
  
      if (reponseUtilisateur === bonneReponse) {
        alert("Réponse juste !");
        score++;
      } else {
        alert("Réponse fausse !");
      }
    }
  
    alert("Vous avez répondu correctement à " + score + " question(s) sur " + QUESTIONS.length + ".");
  }
  

