export const quizCategories = [
  {
    id: 'culture',
    name: 'Culture Générale',
    icon: '🎭',
    description: 'Testez vos connaissances générales',
    color: 'from-purple-500 to-pink-600',
    questions: [
      {
        id: 1,
        question: 'Qui a peint la Joconde ?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Quelle est la capitale de l\'Australie ?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'En quelle année l\'homme a-t-il marché sur la lune pour la première fois ?',
        options: ['1967', '1968', '1969', '1970'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Qui a écrit "Les Misérables" ?',
        options: ['Victor Hugo', 'Émile Zola', 'Gustave Flaubert', 'Marcel Proust'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'Combien y a-t-il de continents ?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'science',
    name: 'Sciences',
    icon: '🔬',
    description: 'Explorez le monde scientifique',
    color: 'from-blue-500 to-cyan-600',
    questions: [
      {
        id: 1,
        question: 'Quel est le symbole chimique de l\'or ?',
        options: ['Go', 'Au', 'Ag', 'Or'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Quelle planète est la plus proche du Soleil ?',
        options: ['Vénus', 'Mars', 'Mercure', 'Terre'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Combien d\'os compte le corps humain adulte ?',
        options: ['196', '206', '216', '226'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Quelle est la vitesse de la lumière dans le vide ?',
        options: ['300 000 km/s', '299 792 458 m/s', '150 000 km/s', '400 000 km/s'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Quel gaz représente environ 78% de l\'atmosphère terrestre ?',
        options: ['Oxygène', 'Dioxyde de carbone', 'Azote', 'Argon'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'histoire',
    name: 'Histoire',
    icon: '📚',
    description: 'Voyagez à travers les époques',
    color: 'from-amber-500 to-orange-600',
    questions: [
      {
        id: 1,
        question: 'En quelle année a eu lieu la Révolution française ?',
        options: ['1789', '1792', '1799', '1804'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Qui était le premier empereur romain ?',
        options: ['Jules César', 'Auguste', 'Néron', 'Trajan'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Quelle guerre a duré de 1939 à 1945 ?',
        options: ['Première Guerre mondiale', 'Guerre de Corée', 'Seconde Guerre mondiale', 'Guerre du Vietnam'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Quel explorateur a découvert l\'Amérique en 1492 ?',
        options: ['Marco Polo', 'Vasco de Gama', 'Christophe Colomb', 'Magellan'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'En quelle année est tombé le mur de Berlin ?',
        options: ['1987', '1989', '1991', '1993'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'sport',
    name: 'Sport',
    icon: '⚽',
    description: 'Testez vos connaissances sportives',
    color: 'from-green-500 to-emerald-600',
    questions: [
      {
        id: 1,
        question: 'Combien de joueurs composent une équipe de football sur le terrain ?',
        options: ['10', '11', '12', '13'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Tous les combien d\'années se déroulent les Jeux Olympiques d\'été ?',
        options: ['2 ans', '3 ans', '4 ans', '5 ans'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Quel pays a remporté la Coupe du Monde de football en 2018 ?',
        options: ['Brésil', 'Argentine', 'Allemagne', 'France'],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Combien de sets faut-il remporter pour gagner un match de tennis masculin en Grand Chelem ?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Quel sport pratique-t-on à Wimbledon ?',
        options: ['Golf', 'Cricket', 'Tennis', 'Rugby'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'node-express',
    name: 'Node.js & Express',
    icon: '💻',
    description: 'Questions pour réviser Node.js & Express.js',
    color: 'from-gray-700 to-gray-900',
    questions: [
      {
        id: 1,
        question: 'Quel module Node.js est utilisé pour créer un serveur HTTP ?',
        options: ['fs', 'http', 'express', 'net'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Quelle commande permet d\'initialiser un projet Node.js ?',
        options: ['npm start', 'node init', 'npm init', 'node start'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Quel est le gestionnaire de paquets par défaut de Node.js ?',
        options: ['yarn', 'pnpm', 'composer', 'npm'],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Quel middleware Express sert à parser le JSON dans les requêtes ?',
        options: ['express.body()', 'express.json()', 'bodyParser()', 'express.data()'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Quelle méthode HTTP est utilisée pour créer une ressource ?',
        options: ['GET', 'POST', 'PUT', 'DELETE'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Quelle méthode Express est utilisée pour définir une route GET ?',
        options: ['app.post()', 'app.get()', 'app.route()', 'app.fetch()'],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'Quel package Node.js permet de gérer les variables d\'environnement ?',
        options: ['dotenv', 'env', 'config', 'settings'],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Que fait la méthode res.json() en Express ?',
        options: ['Envoie une vue HTML', 'Envoie des données JSON', 'Redirige vers une autre page', 'Exécute un middleware'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'Quelle commande démarre un fichier avec nodemon ?',
        options: ['nodemon app.js', 'node app.js', 'npm start', 'node run app.js'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Comment se nomme la méthode pour écouter un port en Express ?',
        options: ['app.connect()', 'app.listen()', 'app.start()', 'app.begin()'],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'Quelle est la méthode pour importer un module en CommonJS ?',
        options: ['import ... from ...', 'require()', 'include()', 'use()'],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'Quel package Express permet la gestion des CORS ?',
        options: ['cors', 'helmet', 'body-parser', 'express-cors'],
        correctAnswer: 0
      },
      {
        id: 13,
        question: 'Quelle méthode Express est utilisée pour définir une route POST ?',
        options: ['app.fetch()', 'app.route()', 'app.post()', 'app.put()'],
        correctAnswer: 2
      },
      {
        id: 14,
        question: 'Quel est le rôle de la méthode next() dans un middleware Express ?',
        options: ['Terminer la réponse', 'Passer au middleware suivant', 'Créer une erreur', 'Fermer la requête'],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'Quel est le port par défaut d\'un serveur HTTP ?',
        options: ['80', '3000', '8080', '443'],
        correctAnswer: 0
      },
      {
        id: 16,
        question: 'Quelle fonction permet de lire un fichier en Node.js ?',
        options: ['fs.readFile()', 'file.read()', 'fs.read()', 'fileSystem.read()'],
        correctAnswer: 0
      },
      {
        id: 17,
        question: 'Quel est le type de modèle utilisé par Express ?',
        options: ['MVC', 'MVVM', 'Flux', 'CQRS'],
        correctAnswer: 0
      },
      {
        id: 18,
        question: 'Quel module gère les chemins de fichiers en Node.js ?',
        options: ['fs', 'path', 'file', 'os'],
        correctAnswer: 1
      },
      {
        id: 19,
        question: 'Quel package Node.js gère les requêtes HTTP clients ?',
        options: ['axios', 'express', 'http-client', 'request'],
        correctAnswer: 0
      },
      {
        id: 20,
        question: 'Quel middleware Express est souvent utilisé pour la gestion des erreurs ?',
        options: ['app.use()', 'errorHandler()', 'catch()', 'try()'],
        correctAnswer: 0
      },
      {
        id: 21,
        question: 'Quelle commande installe Express ?',
        options: ['npm get express', 'npm fetch express', 'npm install express', 'npm require express'],
        correctAnswer: 2
      },
      {
        id: 22,
        question: 'Que renvoie la méthode res.send() ?',
        options: ['Un fichier', 'Un JSON', 'Une réponse textuelle ou HTML', 'Un status code'],
        correctAnswer: 2
      },
      {
        id: 23,
        question: 'Quelle méthode Express supprime une ressource ?',
        options: ['app.remove()', 'app.delete()', 'app.del()', 'app.destroy()'],
        correctAnswer: 1
      },
      {
        id: 24,
        question: 'Quel middleware est utilisé pour les cookies ?',
        options: ['cookie-parser', 'express-session', 'body-parser', 'cookies'],
        correctAnswer: 0
      },
      {
        id: 25,
        question: 'Quel objet Node.js représente la réponse HTTP ?',
        options: ['res', 'req', 'next', 'server'],
        correctAnswer: 0
      },
      {
        id: 26,
        question: 'Comment gérer les fichiers statiques en Express ?',
        options: ['app.static()', 'express.static()', 'app.serve()', 'app.files()'],
        correctAnswer: 1
      },
      {
        id: 27,
        question: 'Quel est le but de Express Router ?',
        options: ['Gérer les routes modulaires', 'Définir un serveur HTTP', 'Envoyer une réponse', 'Gérer les sessions'],
        correctAnswer: 0
      },
      {
        id: 28,
        question: 'Quelle méthode Express renvoie une erreur 404 ?',
        options: ['app.notFound()', 'res.status(404).send()', 'app.error404()', 'app.pageNotFound()'],
        correctAnswer: 1
      },
      {
        id: 29,
        question: 'Quel est le rôle du middleware body-parser ?',
        options: ['Analyser les cookies', 'Analyser le corps des requêtes', 'Gérer les sessions', 'Envoyer les fichiers statiques'],
        correctAnswer: 1
      },
      {
        id: 30,
        question: 'Quel package permet de crypter les mots de passe ?',
        options: ['bcrypt', 'crypto', 'md5', 'argon2'],
        correctAnswer: 0
      },
      {
        id: 31,
        question: 'Quel package permet la gestion des sessions en Express ?',
        options: ['express-session', 'session-express', 'session', 'cookie-session'],
        correctAnswer: 0
      },
      {
        id: 32,
        question: 'Quel est le rôle de middleware ?',
        options: ['Gérer les erreurs', 'Intercepter et traiter la requête', 'Créer des routes', 'Créer des modèles'],
        correctAnswer: 1
      },
      {
        id: 33,
        question: 'Quel est le rôle de la méthode res.redirect() ?',
        options: ['Rediriger le client', 'Afficher une erreur', 'Envoyer un JSON', 'Créer une vue'],
        correctAnswer: 0
      },
      {
        id: 34,
        question: 'Quel est le rôle de app.use() ?',
        options: ['Créer une route', 'Enregistrer un middleware', 'Créer une vue', 'Envoyer une réponse'],
        correctAnswer: 1
      },
      {
        id: 35,
        question: 'Quel module est utilisé pour travailler avec les événements ?',
        options: ['events', 'ev', 'observer', 'event-handler'],
        correctAnswer: 0
      },
      {
        id: 36,
        question: 'Quel est le gestionnaire d\'événements natif de Node.js ?',
        options: ['EventEmitter', 'EventDispatcher', 'EventManager', 'EventListener'],
        correctAnswer: 0
      },
      {
        id: 37,
        question: 'Quel type de boucle d\'événement utilise Node.js ?',
        options: ['multi-threaded', 'single-threaded', 'multi-processed', 'multi-event'],
        correctAnswer: 1
      },
      {
        id: 38,
        question: 'Quel est le rôle de process.env ?',
        options: ['Lire des fichiers', 'Lire des variables d\'environnement', 'Créer des routes', 'Lancer un serveur'],
        correctAnswer: 1
      },
      {
        id: 39,
        question: 'Quel package Express est utilisé pour sécuriser les en-têtes HTTP ?',
        options: ['cors', 'helmet', 'secure', 'express-secure'],
        correctAnswer: 1
      },
      {
        id: 40,
        question: 'Quel est le rôle de async/await en Node.js ?',
        options: ['Créer une boucle', 'Créer un serveur', 'Gérer l\'asynchronisme', 'Envoyer une réponse'],
        correctAnswer: 2
      },
      {
        id: 41,
        question: 'Quel package permet la gestion des erreurs asynchrones ?',
        options: ['express-async-errors', 'express-catch', 'express-errors', 'error-handler'],
        correctAnswer: 0
      },
      {
        id: 42,
        question: 'Comment ajouter un middleware global dans Express ?',
        options: ['app.global()', 'app.use()', 'app.middleware()', 'app.register()'],
        correctAnswer: 1
      },
      {
        id: 43,
        question: 'Que renvoie la méthode res.status() ?',
        options: ['Un code HTML', 'Un fichier', 'Un code de statut HTTP', 'Un objet JSON'],
        correctAnswer: 2
      },
      {
        id: 44,
        question: 'Quel middleware est utilisé pour uploader des fichiers ?',
        options: ['file-uploader', 'multer', 'express-uploader', 'upload'],
        correctAnswer: 1
      },
      {
        id: 45,
        question: 'Quel module natif de Node.js gère les opérations réseau bas niveau ?',
        options: ['net', 'tcp', 'socket', 'connection'],
        correctAnswer: 0
      },
      {
        id: 46,
        question: 'Quel module natif de Node.js permet de créer des serveurs HTTPS ?',
        options: ['https', 'ssl', 'secure', 'tls'],
        correctAnswer: 0
      },
      {
        id: 47,
        question: 'Quelle méthode Express supprime un middleware ?',
        options: ['app.unuse()', 'app.deleteMiddleware()', 'app.remove()', 'Impossible, il faut redémarrer le serveur'],
        correctAnswer: 3
      },
      {
        id: 48,
        question: 'Quel package permet de logger les requêtes HTTP ?',
        options: ['morgan', 'logger', 'express-logger', 'log4js'],
        correctAnswer: 0
      },
      {
        id: 49,
        question: 'Quelle est la commande pour installer nodemon globalement ?',
        options: ['npm i nodemon', 'npm install nodemon', 'npm install -g nodemon', 'npm i -g nodemon'],
        correctAnswer: 2
      },
      {
        id: 50,
        question: 'Quel est le rôle de require() en Node.js ?',
        options: ['Importer un module', 'Exporter un module', 'Lancer le serveur', 'Lire un fichier'],
        correctAnswer: 0
      }
    ]
  }
];
export default quizCategories