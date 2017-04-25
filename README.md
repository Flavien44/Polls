# Polls

Serveur API de sondages

# API

## Créer un sondage

'POST /polls'

Paramètres :
- question : string
- answers : string[]

Réponse :
- 201 (created)
- sondage nouvellement crée en JSON :
  '''
  {"id":1, "question": "Question ?", "answers": ["Réponse 0", "Réponse 1"]}
  '''

Erreurs :
- '400 Bad Request': Parametre incorrects

## Lister des sondages

'GET /polls'

Réponse:
- 200 (OK)

Liste des sondages(id et titre) en JSON :
'''
[{"id": 1, "question": "Question ?"}, ...]
'''

Erreurs:
- '504 Internal Error': Erreur interne

## Récuperer un sondage et ses résultats

'GET /polls:id'

Réponse:
- 200 (OK)

Sondage en JSON :
'''
{'id': 1, "question": "Question ?", "answers":
["Réponse 0", "Réponse 1"], "votes": [0, 0, 1, 0, 1]}
'''

Erreurs:
- '404 Page Not Found': Page non trouvé

## Voter pour une réponse d'un sondage

'POST /polls/:id/votes'

Paramètres:
- answer: Index de la réponse (number)

Réponse :
- 201 (created)

Erreurs:
- '400 Bad Request': Parametre incorrects
- '404 Page Not Found': Page non trouvé'
