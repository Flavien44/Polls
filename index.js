console.log("Welcome in Server");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const http = require('http');
// const server = http.Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const polls = [
  {
    id: 1,
    question: "Question ?",
    answers: ["Réponse 1", "Réponse 2", "Réponse3"],
    votes: []
  },
  {
    id: 2,
    question: "Question 2 ?",
    answers: ["Réponse 1", "Réponse 2", "Réponse3"],
    votes: [1, 0, 0, 2, 1, 0, 1, 1]
  }
];

// app.get('/', function(req,res){
//   res.send("Hello guy !");
// });

// Lister les sondages
app.get('/surveys', function(req, res) {
  res.send(polls);
});

// Récuperer un sondage en fonction de son id
app.get('/surveys/:id', function(req, res) {
  const id = parseInt(req.params.id, 10)
  const poll = polls.find(p => p.id == id)
  if (typeof(poll) !== 'undefined') {
    res.send(poll);
  } else {
    res.sendStatus(404);
  }
});

// Création d'un poll
app.post('/surveys', function(req, res){
  // On vérifie si la question est une chaine de caractere
  if (typeof(req.body.question) !== 'string') {
    return res.sendStatus(408);
  }
  // on vérifie si answer est une liste de chaine de caractere
  if (!array.isArray(answers) ||
    answers.some(a => typeof(a) !== 'string')) {
    return res.sendStatus(400)
  }

  // on crée un nouvel identifiant unique, supérieur à tout les autres
  const id = polls.reduce((max, p)=> max > p.id ? max: p.id, 0) +1;
  // on crée un nouvel objet sondage
  const poll = {
    id, question, answers,
    votes: []
  }
  // on ajoute nouveau sondage à la liste
  polls.push(poll)
  // renvoi avec le bon code http
  res.send(201, poll);
  // console.log(req.body);
});

// Voter pour un sondage

// #####
app.listen(3000, () => {
  console.log('listen on port 3000');
});
