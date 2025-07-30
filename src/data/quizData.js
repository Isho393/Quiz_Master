export const quizCategories = [
  {
    id: "culture",
    name: "Culture Générale",
    icon: "🎭",
    description: "Testez vos connaissances générales",
    color: "from-purple-500 to-pink-600",
    questions: [
      {
        id: 1,
        question: "Qui a peint la Joconde ?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correctAnswer: 1,
        explanation:
          "La Joconde a été peinte par Léonard de Vinci entre 1503 et 1506.",
      },
      {
        id: 2,
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        explanation:
          "La capitale de l'Australie est Canberra, qui est située dans le Territoire de la capitale australienne.",
      },
      {
        id: 3,
        question:
          "En quelle année l'homme a-t-il marché sur la lune pour la première fois ?",
        options: ["1967", "1968", "1969", "1970"],
        correctAnswer: 2,
        explanation:
          "La première mission humaine sur la Lune a eu lieu le 20 juillet 1969 lors de la mission Apollo 11, avec Neil Armstrong et Buzz Aldrin.",
      },
      {
        id: 4,
        question: 'Qui a écrit "Les Misérables" ?',
        options: [
          "Victor Hugo",
          "Émile Zola",
          "Gustave Flaubert",
          "Marcel Proust",
        ],
        correctAnswer: 0,
        explanation:
          "Les Misérables est un roman de Victor Hugo publié en 1862.",
      },
      {
        id: 5,
        question: "Combien y a-t-il de continents ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation:
          "Il y a 7 continents : l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Europe, l'Asie, l'Australie et l'Antarctique.",
      },
    ],
  },
  {
    id: "science",
    name: "Sciences",
    icon: "🔬",
    description: "Explorez le monde scientifique",
    color: "from-blue-500 to-cyan-600",
    questions: [
      {
        id: 1,
        question: "Quel est le symbole chimique de l'or ?",
        options: ["Go", "Au", "Ag", "Or"],
        correctAnswer: 1,
        explanation: "L'or est un élément chimique de symbole Au.",
      },
      {
        id: 2,
        question: "Quelle planète est la plus proche du Soleil ?",
        options: ["Vénus", "Mars", "Mercure", "Terre"],
        correctAnswer: 2,
        explanation:
          "Mercure est la planète la plus proche du Soleil, à environ 57,9 millions de kilomètres.",
      },
      {
        id: 3,
        question: "Combien d'os compte le corps humain adulte ?",
        options: ["196", "206", "216", "226"],
        correctAnswer: 1,
        explanation:
          "Le corps humain adulte compte 206 os, répartis en 27 squelettes.",
      },
      {
        id: 4,
        question: "Quelle est la vitesse de la lumière dans le vide ?",
        options: [
          "300 000 km/s",
          "299 792 458 m/s",
          "150 000 km/s",
          "400 000 km/s",
        ],
        correctAnswer: 1,
        explanation:
          "La vitesse de la lumière dans le vide est d'environ 299 792 458 mètres par seconde.",
      },
      {
        id: 5,
        question: "Quel gaz représente environ 78% de l'atmosphère terrestre ?",
        options: ["Oxygène", "Dioxyde de carbone", "Azote", "Argon"],
        correctAnswer: 2,
        explanation:
          "L'azote représente environ 78% de l'atmosphère terrestre, ce qui en fait le gaz le plus abondant.",
      },
    ],
  },
  {
    id: "histoire",
    name: "Histoire",
    icon: "📚",
    description: "Voyagez à travers les époques",
    color: "from-amber-500 to-orange-600",
    questions: [
      {
        id: 1,
        question: "En quelle année a eu lieu la Révolution française ?",
        options: ["1789", "1792", "1799", "1804"],
        correctAnswer: 0,
        explanation:
          "La Révolution française a débuté en 1789 avec la prise de la Bastille et s'est terminée en 1799 avec la chute de Robespierre.",
      },
      {
        id: 2,
        question: "Qui était le premier empereur romain ?",
        options: ["Jules César", "Auguste", "Néron", "Trajan"],
        correctAnswer: 1,
        explanation:
          "Auguste est le premier empereur romain, qui a régné de 27 av. J.-C. à 14 ap. J.-C.",
      },
      {
        id: 3,
        question: "Quelle guerre a duré de 1939 à 1945 ?",
        options: [
          "Première Guerre mondiale",
          "Guerre de Corée",
          "Seconde Guerre mondiale",
          "Guerre du Vietnam",
        ],
        correctAnswer: 2,
        explanation:
          "La Seconde Guerre mondiale a duré de 1939 à 1945, avec la défaite de l'Allemagne nazie.",
      },
      {
        id: 4,
        question: "Quel explorateur a découvert l'Amérique en 1492 ?",
        options: [
          "Marco Polo",
          "Vasco de Gama",
          "Christophe Colomb",
          "Magellan",
        ],
        correctAnswer: 2,
        explanation:
          "Christophe Colomb a découvert l'Amérique le 12 octobre 1492, après avoir navigué en direction de l'Ouest.",
      },
      {
        id: 5,
        question: "En quelle année est tombé le mur de Berlin ?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswer: 1,
        explanation:
          "Le mur de Berlin a été démoli le 9 novembre 1989, après 28 ans d'existence.",
      },
    ],
  },
  {
    id: "sport",
    name: "Sport",
    icon: "⚽",
    description: "Testez vos connaissances sportives",
    color: "from-green-500 to-emerald-600",
    questions: [
      {
        id: 1,
        question:
          "Combien de joueurs composent une équipe de football sur le terrain ?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 1,
        explanation:
          "Une équipe de football est composée de 11 joueurs, 10 sur le terrain et 1 remplaçant.",
      },
      {
        id: 2,
        question:
          "Tous les combien d'années se déroulent les Jeux Olympiques d'été ?",
        options: ["2 ans", "3 ans", "4 ans", "5 ans"],
        correctAnswer: 2,
        explanation:
          "Les Jeux Olympiques d'été ont lieu tous les 4 ans, sauf en cas d'année olympique.",
      },
      {
        id: 3,
        question:
          "Quel pays a remporté la Coupe du Monde de football en 2018 ?",
        options: ["Brésil", "Argentine", "Allemagne", "France"],
        correctAnswer: 3,
        explanation:
          "La France a remporté la Coupe du Monde de football en 2018, battant la Croatie en finale.",
      },
      {
        id: 4,
        question:
          "Combien de sets faut-il remporter pour gagner un match de tennis masculin en Grand Chelem ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation:
          "Pour gagner un match de tennis masculin en Grand Chelem, il faut remporter au moins 3 sets.",
      },
      {
        id: 5,
        question: "Quel sport pratique-t-on à Wimbledon ?",
        options: ["Golf", "Cricket", "Tennis", "Rugby"],
        correctAnswer: 2,
        explanation:
          "Wimbledon est un tournoi de tennis qui se déroule chaque année à Londres.",
      },
    ],
  },
  {
    id: "node-express",
    name: "Node.js & Express",
    icon: "💻",
    description: "Questions pour réviser Node.js & Express.js",
    color: "from-gray-700 to-gray-900",
    questions: [
      {
        id: 1,
        question:
          "Quel module Node.js est utilisé pour créer un serveur HTTP ?",
        options: ["fs", "http", "express", "net"],
        correctAnswer: 1,
        explanation:
          "Le module 'http' de Node.js est le plus basique pour créer un serveur HTTP. Il permet de gérer les requêtes et les réponses HTTP.",
      },
      {
        id: 2,
        question: "Quelle commande permet d'initialiser un projet Node.js ?",
        options: ["npm start", "node init", "npm init", "node start"],
        correctAnswer: 2,
        explanation:
          "La commande 'npm init' est utilisée pour initialiser un nouveau projet Node.js. Elle crée un fichier package.json.",
      },
      {
        id: 3,
        question: "Quel est le gestionnaire de paquets par défaut de Node.js ?",
        options: ["yarn", "pnpm", "composer", "npm"],
        correctAnswer: 3,
        explanation:
          "npm est le gestionnaire de paquets par défaut de Node.js. Il permet d'installer, de gérer et de désinstaller les dépendances d'un projet.",
      },
      {
        id: 4,
        question:
          "Quel middleware Express sert à parser le JSON dans les requêtes ?",
        options: [
          "express.body()",
          "express.json()",
          "bodyParser()",
          "express.data()",
        ],
        correctAnswer: 1,
        explanation:
          "Le middleware 'express.json()' est utilisé pour parser le JSON dans les requêtes HTTP. Il est généralement configuré avec app.use(express.json()).",
      },
      {
        id: 5,
        question: "Quelle méthode HTTP est utilisée pour créer une ressource ?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 1,
        explanation:
          "La méthode HTTP 'POST' est utilisée pour créer une nouvelle ressource sur le serveur. Elle est souvent utilisée pour envoyer des données au serveur.",
      },
      {
        id: 6,
        question:
          "Quelle méthode Express est utilisée pour définir une route GET ?",
        options: ["app.post()", "app.get()", "app.route()", "app.fetch()"],
        correctAnswer: 1,
        explanation:
          "La méthode 'app.get()' est utilisée pour définir une route qui répond à une requête HTTP de type GET. Elle est généralement utilisée pour récupérer des données.",
      },
      {
        id: 7,
        question:
          "Quel package Node.js permet de gérer les variables d'environnement ?",
        options: ["dotenv", "env", "config", "settings"],
        correctAnswer: 0,
        explanation:
          "Le package 'dotenv' est utilisé pour gérer les variables d'environnement dans un projet Node.js. Il permet de charger des variables depuis un fichier .env.",
      },
      {
        id: 8,
        question: "Que fait la méthode res.json() en Express ?",
        options: [
          "Envoie une vue HTML",
          "Envoie des données JSON",
          "Redirige vers une autre page",
          "Exécute un middleware",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode 'res.json()' est utilisée pour envoyer une réponse JSON au client. Elle est souvent utilisée pour renvoyer des données au format JSON.",
      },
      {
        id: 9,
        question: "Quelle commande démarre un fichier avec nodemon ?",
        options: [
          "nodemon app.js",
          "node app.js",
          "npm start",
          "node run app.js",
        ],
        correctAnswer: 0,
        explanation:
          "La commande 'nodemon app.js' est utilisée pour démarrer l'application Node.js avec nodemon. nodemon est un outil qui redémarre automatiquement le serveur lorsqu'un fichier change.",
      },
      {
        id: 10,
        question:
          "Comment se nomme la méthode pour écouter un port en Express ?",
        options: [
          "app.connect()",
          "app.listen()",
          "app.start()",
          "app.begin()",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode 'app.listen()' est utilisée pour écouter un port spécifique sur le serveur. Elle est généralement appelée après la définition des routes.",
      },
      {
        id: 11,
        question: "Quelle est la méthode pour importer un module en CommonJS ?",
        options: ["import ... from ...", "require()", "include()", "use()"],
        correctAnswer: 1,
        explanation:
          "La méthode 'require()' est utilisée pour importer un module en CommonJS. Elle permet d'accéder aux fonctions, objets et variables définis dans le module.",
      },
      {
        id: 12,
        question: "Quel package Express permet la gestion des CORS ?",
        options: ["cors", "helmet", "body-parser", "express-cors"],
        correctAnswer: 0,
        explanation:
          "Le package 'cors' est utilisé pour gérer les requêtes HTTP CORS (Cross-Origin Resource Sharing). Il permet de contrôler les en-têtes HTTP pour autoriser les requêtes provenant d'origines différentes.",
      },
      {
        id: 13,
        question:
          "Quelle méthode Express est utilisée pour définir une route POST ?",
        options: ["app.fetch()", "app.route()", "app.post()", "app.put()"],
        correctAnswer: 2,
        explanation:
          "La méthode 'app.post()' est utilisée pour définir une route qui répond à une requête HTTP de type POST. Elle est généralement utilisée pour envoyer des données au serveur.",
      },
      {
        id: 14,
        question:
          "Quel est le rôle de la méthode next() dans un middleware Express ?",
        options: [
          "Terminer la réponse",
          "Passer au middleware suivant",
          "Créer une erreur",
          "Fermer la requête",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode 'next()' est utilisée pour passer au middleware suivant dans la chaîne de middleware. Elle est généralement appelée à la fin d'un middleware pour indiquer que le traitement est terminé.",
      },
      {
        id: 15,
        question: "Quel est le port par défaut d'un serveur HTTP ?",
        options: ["80", "3000", "8080", "443"],
        correctAnswer: 0,
        explanation:
          "Le port 80 est le port par défaut pour le HTTP non sécurisé. Il est généralement utilisé pour les requêtes HTTP de base.",
      },
      {
        id: 16,
        question: "Quelle fonction permet de lire un fichier en Node.js ?",
        options: [
          "fs.readFile()",
          "file.read()",
          "fs.read()",
          "fileSystem.read()",
        ],
        correctAnswer: 0,
        explanation:
          "La fonction 'fs.readFile()' est utilisée pour lire le contenu d'un fichier en Node.js. Elle prend en argument le chemin du fichier et une fonction de callback.",
      },
      {
        id: 17,
        question: "Quel est le type de modèle utilisé par Express ?",
        options: ["MVC", "MVVM", "Flux", "CQRS"],
        correctAnswer: 0,
        explanation:
          "Express est un framework minimaliste pour Node.js qui utilise le modèle MVC (Model-View-Controller) pour organiser le code.",
      },
      {
        id: 18,
        question: "Quel module gère les chemins de fichiers en Node.js ?",
        options: ["fs", "path", "file", "os"],
        correctAnswer: 1,
        explanation:
          "Le module 'path' est utilisé pour manipuler les chemins de fichiers et les résoudre. Il est souvent utilisé pour construire des chemins de fichiers relatifs.",
      },
      {
        id: 19,
        question: "Quel package Node.js gère les requêtes HTTP clients ?",
        options: ["axios", "express", "http-client", "request"],
        correctAnswer: 0,
        explanation:
          "Le package 'axios' est un client HTTP basé sur Promise pour faire des requêtes HTTP. Il est souvent utilisé pour interagir avec des API REST.",
      },
      {
        id: 20,
        question:
          "Quel middleware Express est souvent utilisé pour la gestion des erreurs ?",
        options: ["app.use()", "errorHandler()", "catch()", "try()"],
        correctAnswer: 0,
        explanation:
          "Le middleware 'app.use()' est utilisé pour enregistrer des middlewares globaux. Il peut être utilisé pour la gestion des erreurs, la configuration des en-têtes, etc.",
      },
      {
        id: 21,
        question: "Quelle commande installe Express ?",
        options: [
          "npm get express",
          "npm fetch express",
          "npm install express",
          "npm require express",
        ],
        correctAnswer: 2,
        explanation:
          "La commande 'npm install express' est utilisée pour installer le package Express.js dans un projet Node.js.",
      },
      {
        id: 22,
        question: "Que renvoie la méthode res.send() ?",
        options: [
          "Un fichier",
          "Un JSON",
          "Une réponse textuelle ou HTML",
          "Un status code",
        ],
        correctAnswer: 2,
        explanation:
          "La méthode 'res.send()' est utilisée pour envoyer une réponse HTTP au client. Elle peut être utilisée pour envoyer du texte, des objets JSON, des fichiers, etc.",
      },
      {
        id: 23,
        question: "Quelle méthode Express supprime une ressource ?",
        options: ["app.remove()", "app.delete()", "app.del()", "app.destroy()"],
        correctAnswer: 1,
        explanation:
          "La méthode 'app.delete()' est utilisée pour supprimer une ressource spécifique. Elle est généralement utilisée pour supprimer des données d'un serveur.",
      },
      {
        id: 24,
        question: "Quel middleware est utilisé pour les cookies ?",
        options: ["cookie-parser", "express-session", "body-parser", "cookies"],
        correctAnswer: 0,
        explanation:
          "Le middleware 'cookie-parser' est utilisé pour parser les cookies envoyés par le client. Il est généralement configuré avec app.use(cookieParser()).",
      },
      {
        id: 25,
        question: "Quel objet Node.js représente la réponse HTTP ?",
        options: ["res", "req", "next", "server"],
        correctAnswer: 0,
        explanation:
          "L'objet 'res' (response) est utilisé pour contrôler la réponse HTTP envoyée au client. Il permet de définir les en-têtes, le statut, le corps de la réponse, etc.",
      },
      {
        id: 26,
        question: "Comment gérer les fichiers statiques en Express ?",
        options: [
          "app.static()",
          "express.static()",
          "app.serve()",
          "app.files()",
        ],
        correctAnswer: 1,
        explanation:
          "Le middleware 'express.static()' est utilisé pour servir des fichiers statiques (CSS, JS, images, etc.) depuis le dossier 'public'. Il est généralement configuré avec app.use(express.static('public')).",
      },
      {
        id: 27,
        question: "Quel est le but de Express Router ?",
        options: [
          "Gérer les routes modulaires",
          "Définir un serveur HTTP",
          "Envoyer une réponse",
          "Gérer les sessions",
        ],
        correctAnswer: 0,
        explanation:
          "Express Router est utilisé pour organiser les routes d'une application en modules. Chaque route est définie dans un fichier séparé, ce qui rend le code plus organisé et plus facile à maintenir.",
      },
      {
        id: 28,
        question: "Quelle méthode Express renvoie une erreur 404 ?",
        options: [
          "app.notFound()",
          "res.status(404).send()",
          "app.error404()",
          "app.pageNotFound()",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode 'app.notFound()' est utilisée pour gérer les requêtes qui n'ont pas trouvé de route correspondante. Elle envoie généralement une réponse 404 avec un message d'erreur.",
      },
      {
        id: 29,
        question: "Quel est le rôle du middleware body-parser ?",
        options: [
          "Analyser les cookies",
          "Analyser le corps des requêtes",
          "Gérer les sessions",
          "Envoyer les fichiers statiques",
        ],
        correctAnswer: 1,
        explanation:
          "Le middleware 'body-parser' est utilisé pour parser le corps des requêtes HTTP. Il est généralement configuré avec app.use(express.json()) et app.use(express.urlencoded()) pour parser le JSON et le formulaire URL.",
      },
      {
        id: 30,
        question: "Quel package permet de crypter les mots de passe ?",
        options: ["bcrypt", "crypto", "md5", "argon2"],
        correctAnswer: 0,
        explanation:
          "Le package 'bcrypt' est utilisé pour crypter les mots de passe de manière sécurisée. Il est généralement utilisé pour stocker les mots de passe dans la base de données.",
      },
      {
        id: 31,
        question: "Quel package permet la gestion des sessions en Express ?",
        options: [
          "express-session",
          "session-express",
          "session",
          "cookie-session",
        ],
        correctAnswer: 0,
        explanation:
          "Le package 'express-session' est utilisé pour gérer les sessions HTTP. Il permet de stocker des données utilisateur dans le cookie de session.",
      },
      {
        id: 32,
        question: "Quel est le rôle de middleware ?",
        options: [
          "Gérer les erreurs",
          "Intercepter et traiter la requête",
          "Créer des routes",
          "Créer des modèles",
        ],
        correctAnswer: 1,
        explanation:
          "Un middleware est un composant qui intercepte les requêtes HTTP et les traite avant qu'elles ne soient envoyées au routeur. Il peut être utilisé pour la gestion des erreurs, la vérification de l'authentification, etc.",
      },
      {
        id: 33,
        question: "Quel est le rôle de la méthode res.redirect() ?",
        options: [
          "Rediriger le client",
          "Afficher une erreur",
          "Envoyer un JSON",
          "Créer une vue",
        ],
        correctAnswer: 0,
        explanation:
          "La méthode 'res.redirect()' est utilisée pour rediriger le client vers une autre URL. Elle est généralement utilisée pour gérer les requêtes de redirection HTTP.",
      },
      {
        id: 34,
        question: "Quel est le rôle de app.use() ?",
        options: [
          "Créer une route",
          "Enregistrer un middleware",
          "Créer une vue",
          "Envoyer une réponse",
        ],
        correctAnswer: 1,
        explanation:
          "Le middleware 'app.use()' est utilisé pour enregistrer des middlewares globaux. Il peut être utilisé pour la gestion des erreurs, la configuration des en-têtes, etc.",
      },
      {
        id: 35,
        question:
          "Quel module est utilisé pour travailler avec les événements ?",
        options: ["events", "ev", "observer", "event-handler"],
        correctAnswer: 0,
        explanation:
          "Le module 'events' est utilisé pour créer et gérer des événements. Il est généralement utilisé avec EventEmitter pour la gestion des événements asynchrones.",
      },
      {
        id: 36,
        question: "Quel est le gestionnaire d'événements natif de Node.js ?",
        options: [
          "EventEmitter",
          "EventDispatcher",
          "EventManager",
          "EventListener",
        ],
        correctAnswer: 0,
        explanation:
          "EventEmitter est le gestionnaire d'événements natif de Node.js. Il permet de créer et d'écouter des événements asynchrones.",
      },
      {
        id: 37,
        question: "Quel type de boucle d'événement utilise Node.js ?",
        options: [
          "multi-threaded",
          "single-threaded",
          "multi-processed",
          "multi-event",
        ],
        correctAnswer: 1,
        explanation:
          "Node.js utilise un modèle d'événement unique (single-threaded) pour gérer les requêtes HTTP. Cela signifie qu'il n'y a qu'un seul thread d'exécution à la fois.",
      },
      {
        id: 38,
        question: "Quel est le rôle de process.env ?",
        options: [
          "Lire des fichiers",
          "Lire des variables d'environnement",
          "Créer des routes",
          "Lancer un serveur",
        ],
        correctAnswer: 1,
        explanation:
          "Le module 'process.env' est utilisé pour accéder aux variables d'environnement du système d'exploitation. Il permet de lire les variables définies dans le fichier .env.",
      },
      {
        id: 39,
        question:
          "Quel package Express est utilisé pour sécuriser les en-têtes HTTP ?",
        options: ["cors", "helmet", "secure", "express-secure"],
        correctAnswer: 1,
        explanation:
          "Le package 'helmet' est utilisé pour sécuriser les en-têtes HTTP. Il ajoute des en-têtes de sécurité pour protéger l'application contre les attaques XSS, CSRF, etc.",
      },
      {
        id: 40,
        question: "Quel est le rôle de async/await en Node.js ?",
        options: [
          "Créer une boucle",
          "Créer un serveur",
          "Gérer l'asynchronisme",
          "Envoyer une réponse",
        ],
        correctAnswer: 2,
        explanation:
          "async/await est utilisé pour gérer l'asynchronisme en JavaScript. Il permet d'écrire du code de manière séquentielle, tout en attendant les résultats des opérations asynchrones.",
      },
      {
        id: 41,
        question: "Quel package permet la gestion des erreurs asynchrones ?",
        options: [
          "express-async-errors",
          "express-catch",
          "express-errors",
          "error-handler",
        ],
        correctAnswer: 0,
        explanation:
          "Le package 'express-async-errors' est utilisé pour gérer les erreurs asynchrones dans Express.js. Il permet de capturer les erreurs qui surviennent lors de l'exécution de fonctions asynchrones.",
      },
      {
        id: 42,
        question: "Comment ajouter un middleware global dans Express ?",
        options: [
          "app.global()",
          "app.use()",
          "app.middleware()",
          "app.register()",
        ],
        correctAnswer: 1,
        explanation:
          "Le middleware 'app.use()' est utilisé pour enregistrer des middlewares globaux. Il peut être utilisé pour la gestion des erreurs, la configuration des en-têtes, etc.",
      },
      {
        id: 43,
        question: "Que renvoie la méthode res.status() ?",
        options: [
          "Un code HTML",
          "Un fichier",
          "Un code de statut HTTP",
          "Un objet JSON",
        ],
        correctAnswer: 2,
        explanation:
          "La méthode 'res.status()' est utilisée pour définir le code de statut HTTP de la réponse. Elle peut être suivie de 'send()', 'json()', 'redirect()', etc.",
      },
      {
        id: 44,
        question: "Quel middleware est utilisé pour uploader des fichiers ?",
        options: ["file-uploader", "multer", "express-uploader", "upload"],
        correctAnswer: 1,
        explanation:
          "Le package 'multer' est utilisé pour gérer le téléchargement de fichiers dans Express.js. Il permet de parser les fichiers envoyés via les requêtes HTTP.",
      },
      {
        id: 45,
        question:
          "Quel module natif de Node.js gère les opérations réseau bas niveau ?",
        options: ["net", "tcp", "socket", "connection"],
        correctAnswer: 0,
        explanation:
          "Le module 'net' est utilisé pour créer des serveurs TCP/IP et des clients. Il permet de gérer les connexions réseau, les flux de données, etc.",
      },
      {
        id: 46,
        question:
          "Quel module natif de Node.js permet de créer des serveurs HTTPS ?",
        options: ["https", "ssl", "secure", "tls"],
        correctAnswer: 0,
        explanation:
          "Le module 'https' est utilisé pour créer des serveurs HTTPS sécurisés. Il permet de gérer les connexions SSL/TLS.",
      },
      {
        id: 47,
        question: "Quelle méthode Express supprime un middleware ?",
        options: [
          "app.unuse()",
          "app.deleteMiddleware()",
          "app.remove()",
          "Impossible, il faut redémarrer le serveur",
        ],
        correctAnswer: 3,
        explanation:
          "La méthode 'app.remove()' est utilisée pour supprimer un middleware spécifique enregistré avec 'app.use()'. Il faut redémarrer le serveur pour que les changements prennent effet.",
      },
      {
        id: 48,
        question: "Quel package permet de logger les requêtes HTTP ?",
        options: ["morgan", "logger", "express-logger", "log4js"],
        correctAnswer: 0,
        explanation:
          "Le package 'morgan' est utilisé pour logger les requêtes HTTP dans Express.js. Il permet de journaliser les requêtes entrantes, les réponses, les erreurs, etc.",
      },
      {
        id: 49,
        question: "Quelle est la commande pour installer nodemon globalement ?",
        options: [
          "npm i nodemon",
          "npm install nodemon",
          "npm install -g nodemon",
          "npm i -g nodemon",
        ],
        correctAnswer: 2,
        explanation:
          "La commande 'npm install -g nodemon' est utilisée pour installer nodemon globalement. nodemon est un outil qui redémarre automatiquement le serveur lorsqu'un fichier change.",
      },
      {
        id: 50,
        question: "Quel est le rôle de require() en Node.js ?",
        options: [
          "Importer un module",
          "Exporter un module",
          "Lancer le serveur",
          "Lire un fichier",
        ],
        correctAnswer: 0,
        explanation:
          "La fonction 'require()' est utilisée pour importer un module en CommonJS. Elle permet d'accéder aux fonctions, objets et variables définis dans le module.",
      },
    ],
  },

  {
    id: "php-base",
    name: "PHP - Bases 1",
    icon: "🐘",
    description: "Les fondamentaux du langage PHP",
    color: "from-indigo-500 to-blue-600",
    questions: [
      {
        id: 1,
        question: "Quelle est l’extension standard d’un fichier PHP ?",
        options: [".html", ".ph", ".php", ".js"],
        correctAnswer: 2,
        explanation: `L’extension standard d’un fichier PHP est .php.
Cela indique au serveur web que le fichier contient du code PHP qui doit être interprété avant d’être envoyé au navigateur. Par exemple, un fichier index.php peut contenir du code HTML et PHP.`,
      },
      {
        id: 2,
        question:
          "Quel mot-clé est utilisé pour déclarer une fonction en PHP ?",
        options: ["method", "func", "function", "define"],
        correctAnswer: 2,
        explanation:
          "Le mot-clé `function` est utilisé pour déclarer une fonction en PHP. Il est suivi du nom de la fonction, de parenthèses pour les paramètres, et d’un bloc de code entre accolades.",
      },

      {
        id: 3,
        question: 'Quel est le résultat de `echo 2 + "2 chats";` ?',
        options: ["22", "4", "Erreur", "2"],
        correctAnswer: 1,
        explanation:
          'En PHP, l\'opérateur `+` convertit automatiquement les chaînes en nombres si possible. Ici, "2 chats" est converti en 2, donc 2 + 2 = 4.',
      },

      {
        id: 4,
        question: "Comment déclare-t-on une variable en PHP ?",
        options: ["var x;", "$x;", "let x;", "x = 0;"],
        correctAnswer: 1,
        explanation:
          "En PHP, toutes les variables commencent par le symbole `$`. Par exemple : `$x = 5;` déclare et initialise une variable.",
      },

      {
        id: 5,
        question:
          "Quelle fonction permet d’afficher une information à l’écran ?",
        options: ["print()", "alert()", "console.log()", "display()"],
        correctAnswer: 0,
        explanation:
          "La fonction 'print()' ou 'echo' permettent d'afficher du texte en PHP. 'print' retourne toujours 1, tandis qu'echo est plus rapide.",
      },
      {
        id: 6,
        question:
          "Quelle est la bonne syntaxe pour les commentaires sur une ligne ?",
        options: ["/* ... */", "# ...", "// ...", "<!-- ... -->"],
        correctAnswer: 2,
        explanation:
          "La syntaxe '//' est utilisée pour les commentaires sur une ligne en PHP. Elle commence par '//' et continue jusqu'à la fin de la ligne.",
      },
      {
        id: 7,
        question: "Quelle superglobale contient les données envoyées en POST ?",
        options: ["$_POST", "$POST", "POST", "$_DATA"],
        correctAnswer: 0,
        explanation:
          "La superglobale '$_POST' est utilisée pour accéder aux données envoyées via le formulaire HTML avec la méthode POST.",
      },
      {
        id: 8,
        question: "Que fait `isset()` en PHP ?",
        options: [
          "Crée une variable",
          "Teste si une variable est définie",
          "Efface une variable",
          "Initialise à NULL",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'isset()' est utilisée pour vérifier si une variable est définie et n'est pas NULL. Elle retourne TRUE si la variable existe, FALSE sinon.",
      },
      {
        id: 9,
        question: 'Quel est le type retourné par `gettype("123")` ?',
        options: ["integer", "string", "number", "text"],
        correctAnswer: 1,
        explanation:
          "La fonction 'gettype()' retourne le type de la variable. 'string' est le type pour les chaînes de caractères.",
      },
      {
        id: 10,
        question: 'Que renvoie `empty("")` ?',
        options: ["true", "false", "null", "Erreur"],
        correctAnswer: 0,
        explanation: `La fonction 'empty()' retourne TRUE si la variable est vide ou n'existe pas. Dans ce cas, '' est une chaîne vide, donc 'empty("")' renvoie TRUE.`,
      },
      {
        id: 11,
        question:
          "Quelle fonction permet d’inclure un fichier PHP une seule fois ?",
        options: ["include", "import", "require_once", "add"],
        correctAnswer: 2,
        explanation:
          "La fonction 'require_once()' est utilisée pour inclure un fichier PHP une seule fois. Elle empêche la redéfinition de la fonction si le fichier est déjà inclus.",
      },
      {
        id: 12,
        question: "Quel est l’opérateur de concaténation en PHP ?",
        options: ["+", ".", "&", "++"],
        correctAnswer: 1,
        explanation:
          "L'opérateur '.' est utilisé pour la concaténation de chaînes de caractères en PHP. Il permet de combiner plusieurs chaînes.",
      },
      {
        id: 13,
        question: "Comment appelle-t-on une fonction de manière récursive ?",
        options: [
          "En appelant une autre fonction",
          "En appelant elle-même",
          "Impossible en PHP",
          "Avec `loop()`",
        ],
        correctAnswer: 1,
        explanation:
          "En PHP, une fonction peut s'appeler elle-même, ce qui est appelé récursivité. C'est souvent utilisé pour résoudre des problèmes de récurrence.",
      },
      {
        id: 14,
        question: "Que signifie l’acronyme PHP ?",
        options: [
          "Personal Home Page",
          "PHP: Hypertext Preprocessor",
          "Private Hosting Provider",
          "Page Hosting PHP",
        ],
        correctAnswer: 1,
        explanation:
          "PHP: Hypertext Preprocessor est l'acronyme récursif actuel de PHP. Initialement, PHP signifiait 'Personal Home Page'.",
      },
      {
        id: 15,
        question: "Quelle structure de contrôle n’existe pas en PHP ?",
        options: ["if", "match", "foreach", "switch"],
        correctAnswer: 1,
        explanation:
          "La structure 'match' a été introduite en PHP 8.0. Dans les versions antérieures, elle n'existait pas et on utilisait 'switch' à la place.",
      },
      {
        id: 16,
        question: "Quelle fonction sert à compter les éléments d’un tableau ?",
        options: ["length()", "count()", "size()", "sum()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'count()' est utilisée pour compter le nombre d'éléments dans un tableau. Elle peut être utilisée avec 'sizeof()' qui est un alias.",
      },
      {
        id: 17,
        question:
          "Quel symbole est utilisé pour accéder à une propriété dans une classe ?",
        options: [".", "->", "::", "$"],
        correctAnswer: 1,
        explanation:
          "Le symbole '->' est utilisé pour accéder aux propriétés et aux méthodes d'un objet en PHP. Il est suivi du nom de la propriété ou de la méthode.",
      },
      {
        id: 18,
        question: "Quel mot-clé permet d’hériter d’une classe ?",
        options: ["include", "extends", "implements", "inherits"],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'extends' est utilisé pour hériter d'une classe en PHP. Il est suivi du nom de la classe parente.",
      },
      {
        id: 19,
        question: "Quel est le rôle de `die()` ou `exit()` ?",
        options: [
          "Arrêter le script",
          "Afficher une erreur",
          "Créer un fichier",
          "Supprimer une variable",
        ],
        correctAnswer: 0,
        explanation:
          "Les fonctions 'die()' et 'exit()' sont utilisées pour arrêter l'exécution d'un script PHP. 'die()' est un alias de 'exit().'",
      },
      {
        id: 20,
        question: "Quelle méthode supprime une session ?",
        options: [
          "session_destroy()",
          "session_delete()",
          "unset()",
          "remove_session()",
        ],
        correctAnswer: 0,
        explanation:
          "La méthode 'session_destroy()' est utilisée pour détruire une session PHP. Elle supprime toutes les données de session associées à la session en cours.",
      },
      {
        id: 21,
        question: "Quelle fonction vérifie si un fichier existe ?",
        options: ["exists()", "file_exists()", "check_file()", "is_file()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'file_exists()' est utilisée pour vérifier si un fichier existe à un chemin spécifique. Elle retourne TRUE si le fichier existe, FALSE sinon.",
      },
      {
        id: 22,
        question:
          "Quelle est la valeur de retour d’une fonction sans `return` ?",
        options: ["0", "null", "true", "undefined"],
        correctAnswer: 1,
        explanation:
          "En PHP, si une fonction n'a pas de 'return', elle retourne 'null' par défaut. Cela signifie que la fonction n'a pas de valeur de retour explicite.",
      },
      {
        id: 23,
        question: 'Que retourne `strpos("bonjour", "jour")` ?',
        options: ["false", "3", "4", "5"],
        correctAnswer: 1,
        explanation: `La fonction 'strpos()' retourne la position de la première occurrence d'une sous-chaîne dans une chaîne. Dans ce cas, 'strpos("bonjour", "jour")' retourne 4.`,
      },
      {
        id: 24,
        question: "PHP est-il sensible à la casse ?",
        options: ["Oui", "Non", "Parfois", "Uniquement pour les fonctions"],
        correctAnswer: 0,
        explanation:
          "PHP est sensible à la casse. 'Bonjour' est différent de 'bonjour' et de 'BONJOUR'. Cela s'applique à toutes les variables, fonctions, classes, etc.",
      },
      {
        id: 25,
        question: "Quelle méthode permet d’envoyer un header HTTP ?",
        options: ["http_send()", "header()", "redirect()", "set_header()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'header()' est utilisée pour envoyer des en-têtes HTTP au client. Elle peut être suivie de 'send()' pour envoyer le corps de la réponse.",
      },
    ],
  },
  {
    id: "php-avance",
    name: "PHP - Avancé",
    icon: "🧠",
    description: "Approfondissez vos connaissances PHP",
    color: "from-pink-500 to-red-600",
    questions: [
      {
        id: 26,
        question: "Quel mot-clé définit une interface ?",
        options: ["interface", "class", "trait", "abstract"],
        correctAnswer: 0,
        explanation:
          "Le mot-clé 'interface' est utilisé pour définir une interface en PHP. Une interface définit un contrat que les classes doivent suivre.",
      },
      {
        id: 27,
        question:
          "Quelle est la portée d’une variable déclarée avec `static` ?",
        options: ["Globale", "Session", "Locale mais persistante", "Illimitée"],
        correctAnswer: 2,
        explanation:
          "Une variable déclarée avec 'static' est partagée entre toutes les instances d'une classe. Elle persiste pendant toute la durée de vie de l'application.",
      },
      {
        id: 28,
        question: "Quelle fonction permet de sérialiser un tableau ?",
        options: ["serialize()", "toJSON()", "pack()", "array_flatten()"],
        correctAnswer: 0,
        explanation:
          "La fonction 'serialize()' est utilisée pour convertir un tableau PHP en une chaîne de caractères. Cela permet de stocker le tableau dans une variable ou une base de données.",
      },
      {
        id: 29,
        question: "Que fait `json_encode()` ?",
        options: [
          "Encode du HTML",
          "Encode en Base64",
          "Encode en JSON",
          "Crypte la chaîne",
        ],
        correctAnswer: 2,
        explanation:
          "La fonction 'json_encode()' est utilisée pour convertir un tableau PHP en une chaîne JSON. Elle est souvent utilisée pour renvoyer des données au format JSON.",
      },
      {
        id: 30,
        question: "Quelle classe permet de manipuler une base de données PDO ?",
        options: ["PDO", "MySQL", "DB", "Connector"],
        correctAnswer: 0,
        explanation:
          "La classe 'PDO' est utilisée pour interagir avec les bases de données en PHP. Elle est plus sécurisée et plus flexible que les extensions MySQL natives.",
      },
      {
        id: 31,
        question: "Quel mot-clé empêche l’héritage d’une classe ?",
        options: ["static", "final", "private", "sealed"],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'final' est utilisé pour empêcher l'héritage d'une classe. Une classe 'final' ne peut pas être étendue par d'autres classes.",
      },
      {
        id: 32,
        question: "Que signifie le mot-clé `abstract` ?",
        options: [
          "Méthode accessible uniquement en privé",
          "Classe ou méthode partiellement implémentée",
          "Classe finale",
          "Méthode statique",
        ],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'abstract' est utilisé pour déclarer une méthode ou une classe qui n'a pas d'implémentation complète. Elle doit être implémentée par les classes qui l'héritent.",
      },
      {
        id: 33,
        question: "Quel mot-clé permet d’utiliser un trait ?",
        options: ["include", "trait", "use", "with"],
        correctAnswer: 2,
        explanation:
          "Le mot-clé 'use' est utilisé pour utiliser un trait en PHP. Un trait est un ensemble de méthodes qui peuvent être réutilisées dans plusieurs classes.",
      },
      {
        id: 34,
        question: "Quelle méthode PDO exécute une requête préparée ?",
        options: ["execute()", "prepare()", "query()", "run()"],
        correctAnswer: 0,
        explanation:
          "La méthode 'execute()' est utilisée pour exécuter une requête préparée PDO. Elle prend en argument les paramètres de la requête.",
      },
      {
        id: 35,
        question: "Comment attraper une exception en PHP ?",
        options: ["try/catch", "catch/throw", "try/except", "error_handler"],
        correctAnswer: 0,
        explanation:
          "La structure 'try/catch' est utilisée pour attraper les exceptions en PHP. Elle permet de gérer les erreurs qui peuvent survenir lors de l'exécution d'un script.",
      },
      {
        id: 36,
        question:
          "Quelle fonction permet de charger automatiquement une classe ?",
        options: ["autoload()", "__autoload()", "load_class()", "require()"],
        correctAnswer: 1,
        explanation:
          "La fonction '__autoload()' est utilisée pour charger automatiquement les classes PHP. Elle est appelée lorsqu'une classe n'est pas trouvée.",
      },
      {
        id: 37,
        question: "Que fait la méthode magique `__toString()` ?",
        options: [
          "Retourne un objet",
          "Convertit une chaîne",
          "Définit la représentation texte d’un objet",
          "Affiche une chaîne",
        ],
        correctAnswer: 2,
        explanation:
          "La méthode magique '__toString()' est appelée lorsqu'on essaie d'afficher un objet en PHP. Elle doit retourner une chaîne de caractères.",
      },
      {
        id: 38,
        question: "Quel est le mot-clé pour définir une constante de classe ?",
        options: ["let", "const", "define", "static"],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'const' est utilisé pour définir une constante de classe. Elle est similaire à 'define' mais est définie au niveau de la classe.",
      },
      {
        id: 39,
        question: "Quelle est la portée d’une propriété `protected` ?",
        options: [
          "Classe seulement",
          "Classe et enfants",
          "Partout",
          "Fichier actuel uniquement",
        ],
        correctAnswer: 1,
        explanation:
          "Une propriété déclarée avec 'protected' est accessible depuis la classe elle-même, ainsi que depuis les classes qui l'héritent.",
      },
      {
        id: 40,
        question: "Que signifie le mot-clé `namespace` ?",
        options: [
          "Déclare un dossier",
          "Évite les conflits de noms",
          "Importe un fichier",
          "Crée une base de données",
        ],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'namespace' est utilisé pour éviter les conflits de noms de classes, fonctions, interfaces, etc. Il permet de créer des espaces de noms.",
      },
      {
        id: 41,
        question: "Comment déclare-t-on un tableau associatif ?",
        options: ["array(0,1,2)", "[]", '["cle" => "valeur"]', "{cle: valeur}"],
        correctAnswer: 2,
        explanation: `Un tableau associatif en PHP est défini avec des clés et des valeurs. La syntaxe '["cle" => "valeur"]' est la plus courante.`,
      },
      {
        id: 42,
        question:
          "Quelle méthode récupère toutes les lignes d’un résultat PDO ?",
        options: ["fetchAll()", "getRows()", "queryAll()", "selectAll()"],
        correctAnswer: 0,
        explanation:
          "La méthode 'fetchAll()' est utilisée pour récupérer toutes les lignes d'un résultat PDO. Elle retourne un tableau de résultats.",
      },
      {
        id: 43,
        question: "Quelle fonction permet de supprimer les balises HTML ?",
        options: [
          "remove_tags()",
          "html_strip()",
          "strip_tags()",
          "clear_html()",
        ],
        correctAnswer: 2,
        explanation:
          "La fonction 'strip_tags()' est utilisée pour supprimer les balises HTML d'une chaîne. Elle prend en argument la chaîne et une liste facultative de balises à conserver.",
      },
      {
        id: 44,
        question: 'Quel opérateur PHP est le "null coalescing" ?',
        options: ["??", "?:", "&&", "=>"],
        correctAnswer: 0,
        explanation:
          "L'opérateur '??' (null coalescing) est utilisé pour retourner la première valeur non nulle d'une liste. Si toutes les valeurs sont nulles, il retourne la dernière.",
      },
      {
        id: 45,
        question: "Quelle extension est souvent utilisée avec Composer ?",
        options: ["vendor/", "package.json", "node_modules/", "config/"],
        correctAnswer: 0,
        explanation:
          "L'extension 'vendor/' est souvent utilisée avec Composer pour stocker les dépendances d'un projet. Elle contient les paquets installés.",
      },
      {
        id: 46,
        question: "Quelle commande initialise un projet avec Composer ?",
        options: [
          "composer create",
          "composer start",
          "composer init",
          "composer build",
        ],
        correctAnswer: 2,
        explanation:
          "La commande 'composer init' est utilisée pour initialiser un nouveau projet PHP avec Composer. Elle crée un fichier 'composer.json' et installe les dépendances.",
      },
      {
        id: 47,
        question: "Quelle structure est correcte pour une boucle while ?",
        options: [
          "while (i < 10) { ... }",
          "while i < 10 { ... }",
          "loop (i < 10) { ... }",
          "repeat while(i < 10) { ... }",
        ],
        correctAnswer: 0,
        explanation:
          "La structure 'while' est utilisée pour exécuter un bloc de code tant qu'une condition est vraie. Elle est souvent utilisée pour parcourir des collections ou attendre des événements.",
      },
      {
        id: 48,
        question: "Que fait `array_merge()` ?",
        options: [
          "Supprime les doublons",
          "Fusionne deux tableaux",
          "Trie un tableau",
          "Inverse un tableau",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'array_merge()' est utilisée pour fusionner deux tableaux PHP. Elle prend en argument les tableaux à fusionner et retourne un nouveau tableau.",
      },
      {
        id: 49,
        question: "Quel est le rôle de Composer ?",
        options: [
          "Compiler du code",
          "Gérer les dépendances PHP",
          "Créer des interfaces",
          "Créer des APIs",
        ],
        correctAnswer: 1,
        explanation:
          "Composer est un gestionnaire de dépendances PHP. Il permet d'installer, de gérer et de désinstaller les dépendances d'un projet.",
      },
      {
        id: 50,
        question: "Comment accéder à une propriété statique d’une classe ?",
        options: ["self::$prop", "this->prop", "class->prop", "$this::$prop"],
        correctAnswer: 0,
        explanation:
          "La syntaxe 'self::$prop' est utilisée pour accéder à une propriété statique d'une classe. Elle est similaire à 'this->prop' mais est utilisée pour les propriétés statiques.",
      },
    ],
  },
  {
    id: "php2",
    name: "PHP - Partie 2",
    icon: "🧠",
    description: "Poursuivez votre révision avancée de PHP",
    color: "from-indigo-500 to-blue-600",
    questions: [
      {
        id: 51,
        question: "Quelle est la valeur par défaut de `$_GET` ?",
        options: ["null", "array vide", "false", "undefined"],
        correctAnswer: 1,
        explanation:
          "La superglobale '$_GET' est un tableau associatif qui contient les données envoyées via l'URL avec la méthode GET. Sa valeur par défaut est un tableau vide.",
      },
      {
        id: 52,
        question: "Quel est le rôle de `session_start()` ?",
        options: [
          "Détruire une session",
          "Initialiser ou reprendre une session",
          "Vider les variables de session",
          "Créer un cookie",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'session_start()' est utilisée pour démarrer une session PHP. Elle doit être appelée au début de chaque script qui utilise les variables de session.",
      },
      {
        id: 53,
        question:
          "Quelle est la méthode HTTP par défaut utilisée par un formulaire HTML ?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 0,
        explanation:
          "La méthode HTTP par défaut pour un formulaire HTML est 'GET'. Elle envoie les données du formulaire dans l'URL avec la méthode GET.",
      },
      {
        id: 54,
        question:
          "Quelle superglobale contient les fichiers envoyés via un formulaire ?",
        options: ["$_POST", "$_FILES", "$_REQUEST", "$_UPLOAD"],
        correctAnswer: 1,
        explanation:
          "La superglobale '$_FILES' est utilisée pour accéder aux fichiers envoyés via un formulaire HTML avec la méthode POST.",
      },
      {
        id: 55,
        question: "Que retourne `empty([])` en PHP ?",
        options: ["true", "false", "null", "error"],
        correctAnswer: 0,
        explanation:
          "La fonction 'empty()' retourne TRUE si la variable est vide ou n'existe pas. Dans ce cas, '[]' est un tableau vide, donc 'empty([])' retourne TRUE.",
      },
      {
        id: 56,
        question:
          "Quelle fonction permet de supprimer un élément dans un tableau ?",
        options: ["remove()", "delete()", "unset()", "clear()"],
        correctAnswer: 2,
        explanation:
          "La fonction 'unset()' est utilisée pour supprimer une variable. Dans le cas d'un tableau, elle supprime l'élément à l'index spécifié.",
      },
      {
        id: 57,
        question: "Quelle est la différence entre `==` et `===` en PHP ?",
        options: [
          "Aucune différence",
          "=== vérifie uniquement la valeur",
          "=== vérifie valeur et type",
          "== vérifie valeur et type",
        ],
        correctAnswer: 2,
        explanation:
          "L'opérateur '===' (strictement égal) vérifie à la fois la valeur et le type de la variable. L'opérateur '==' (égal) vérifie uniquement la valeur.",
      },
      {
        id: 58,
        question: "Que fait la fonction `explode()` ?",
        options: [
          "Crée une chaîne à partir d’un tableau",
          "Divise une chaîne en un tableau",
          "Supprime des caractères",
          "Fusionne deux chaînes",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'explode()' divise une chaîne de caractères en un tableau, en utilisant un délimiteur. Elle prend en argument la chaîne et le délimiteur.",
      },
      {
        id: 59,
        question:
          "Quelle est la portée d’une variable déclarée avec `global` ?",
        options: ["Locale", "Globale", "Superglobale", "Statique"],
        correctAnswer: 1,
        explanation:
          "Une variable déclarée avec 'global' est accessible depuis n'importe quel endroit du script. Elle est déclarée avec 'global $variable;'.",
      },
      {
        id: 60,
        question:
          "Que retourne la fonction `isset()` si la variable n’existe pas ?",
        options: ["false", "true", "null", "error"],
        correctAnswer: 0,
        explanation:
          "La fonction 'isset()' retourne FALSE si la variable n'existe pas ou si elle est NULL. Elle retourne TRUE si la variable existe et n'est pas NULL.",
      },
      {
        id: 61,
        question: "Quelle est la structure correcte d’une classe en PHP ?",
        options: [
          "def MaClasse { }",
          "function MaClasse() { }",
          "class MaClasse { }",
          "new MaClasse() { }",
        ],
        correctAnswer: 2,
        explanation:
          "La structure 'class' est utilisée pour définir une classe en PHP. Elle est suivie du nom de la classe et des accolades.",
      },
      {
        id: 62,
        question:
          "Quelle est la visibilité par défaut d’une méthode dans une classe ?",
        options: ["private", "protected", "public", "static"],
        correctAnswer: 2,
        explanation:
          "Une méthode déclarée sans mot-clé de visibilité est 'public' par défaut. Elle est accessible depuis n'importe quel endroit.",
      },
      {
        id: 63,
        question: "Comment hérite-t-on d’une classe en PHP ?",
        options: [
          "class Fille extend Mère",
          "class Fille implements Mère",
          "class Fille inherits Mère",
          "class Fille extends Mère",
        ],
        correctAnswer: 3,
        explanation:
          "La syntaxe 'extends' est utilisée pour hériter d'une classe en PHP. Elle est suivie du nom de la classe parente.",
      },
      {
        id: 64,
        question:
          "Quel mot-clé permet de définir une constante dans une classe ?",
        options: ["define", "static", "const", "final"],
        correctAnswer: 2,
        explanation:
          "Le mot-clé 'const' est utilisé pour définir une constante de classe. Elle est similaire à 'define' mais est définie au niveau de la classe.",
      },
      {
        id: 65,
        question: "Que fait `json_encode()` ?",
        options: [
          "Décode une chaîne JSON",
          "Encode un tableau en JSON",
          "Crée un cookie",
          "Génère un fichier",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'json_encode()' est utilisée pour convertir un tableau PHP en une chaîne JSON. Elle est souvent utilisée pour renvoyer des données au format JSON.",
      },
      {
        id: 66,
        question: "Quel mot-clé permet d’empêcher l’héritage d’une classe ?",
        options: ["private", "protected", "final", "sealed"],
        correctAnswer: 2,
        explanation:
          "Le mot-clé 'final' est utilisé pour empêcher l'héritage d'une classe. Une classe 'final' ne peut pas être étendue par d'autres classes.",
      },
      {
        id: 67,
        question:
          "Quelle fonction est utilisée pour vérifier si une classe existe ?",
        options: [
          "is_class()",
          "class_exists()",
          "check_class()",
          "defined_class()",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'class_exists()' est utilisée pour vérifier si une classe existe. Elle prend en argument le nom de la classe.",
      },
      {
        id: 68,
        question: "Quel est le rôle de `PDO::prepare()` ?",
        options: [
          "Exécuter une requête SQL",
          "Préparer une requête paramétrée",
          "Connecter à une base",
          "Créer une table",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode 'prepare()' est utilisée pour préparer une requête SQL avec des paramètres. Elle retourne un objet PDOStatement.",
      },
      {
        id: 69,
        question: "Que fait `password_hash()` ?",
        options: [
          "Crypte une image",
          "Génère un mot de passe aléatoire",
          "Hash un mot de passe de manière sécurisée",
          "Vérifie un mot de passe",
        ],
        correctAnswer: 2,
        explanation:
          "La fonction 'password_hash()' est utilisée pour crypter un mot de passe de manière sécurisée. Elle prend en argument le mot de passe et le type de hachage.",
      },
      {
        id: 70,
        question: "Quelle est l’utilité de `filter_var()` ?",
        options: [
          "Nettoyer une chaîne",
          "Valider ou filtrer une variable",
          "Crypter une donnée",
          "Formater une date",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'filter_var()' est utilisée pour valider ou filtrer une variable. Elle prend en argument la variable et le filtre à appliquer.",
      },
      {
        id: 71,
        question: "Que retourne `array_merge([1, 2], [3, 4])` ?",
        options: ["[1, 2]", "[3, 4]", "[1, 2, 3, 4]", "Erreur"],
        correctAnswer: 2,
        explanation:
          "La fonction 'array_merge()' fusionne deux tableaux PHP. Elle prend en argument les tableaux à fusionner et retourne un nouveau tableau.",
      },
      {
        id: 72,
        question: "Quel est le rôle de `mysqli_connect()` ?",
        options: [
          "Exécuter une requête",
          "Se connecter à une base MySQL",
          "Créer un utilisateur",
          "Créer une base de données",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'mysqli_connect()' est utilisée pour établir une connexion à une base de données MySQL. Elle prend en argument les paramètres de connexion.",
      },
      {
        id: 73,
        question: 'Quel est le résultat de `count(["a", "b", "c"])` ?',
        options: ["2", "3", "4", "1"],
        correctAnswer: 1,
        explanation:
          "La fonction 'count()' est utilisée pour compter le nombre d'éléments dans un tableau. Elle peut être utilisée avec 'sizeof()' qui est un alias.",
      },
      {
        id: 74,
        question: "Que permet `foreach` ?",
        options: [
          "Exécuter une fonction",
          "Afficher une variable",
          "Parcourir un tableau",
          "Créer une boucle infinie",
        ],
        correctAnswer: 2,
        explanation:
          "La boucle 'foreach' est utilisée pour parcourir les éléments d'un tableau. Elle est souvent utilisée pour itérer sur les éléments d'un tableau.",
      },
      {
        id: 75,
        question: "Comment accéder à une variable de session ?",
        options: [
          '$_SESSION["nom"]',
          'session["nom"]',
          'get_session("nom")',
          '$_SESS["nom"]',
        ],
        correctAnswer: 0,
        explanation:
          "La superglobale '$_SESSION' est utilisée pour accéder aux variables de session PHP. Elle est un tableau associatif qui stocke les données de session.",
      },
      {
        id: 76,
        question:
          "Quelle est la bonne extension de fichier pour un script PHP ?",
        options: [".ph", ".php", ".phtml", ".script"],
        correctAnswer: 1,
        explanation:
          "L'extension .php est la plus courante pour les fichiers PHP. Elle indique au serveur que le fichier doit être interprété comme du PHP.",
      },
      {
        id: 77,
        question: "Quel est le mot-clé pour définir une méthode statique ?",
        options: ["static", "const", "this", "private"],
        correctAnswer: 0,
        explanation:
          "Le mot-clé 'static' est utilisé pour définir une méthode statique. Une méthode statique peut être appelée sans instancier la classe.",
      },
      {
        id: 78,
        question: "Que fait `require_once` ?",
        options: [
          "Inclut un fichier chaque fois",
          "Inclut un fichier une seule fois",
          "Exécute un script",
          "Crée une variable",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'require_once()' est utilisée pour inclure un fichier PHP une seule fois. Elle empêche la redéfinition de la fonction si le fichier est déjà inclus.",
      },
      {
        id: 79,
        question: "Quelle fonction permet de lire une ligne dans un fichier ?",
        options: ["read()", "fgets()", "file_get()", "scan()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'fgets()' est utilisée pour lire une ligne à la fois d'un fichier. Elle prend en argument le chemin du fichier et retourne la ligne lue.",
      },
      {
        id: 80,
        question: "Quelle fonction supprime un fichier ?",
        options: ["file_delete()", "unlink()", "remove()", "delete_file()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'unlink()' est utilisée pour supprimer un fichier. Elle prend en argument le chemin du fichier à supprimer.",
      },
      {
        id: 81,
        question: "Comment s’écrit un commentaire sur une seule ligne ?",
        options: [
          "# commentaire",
          "// commentaire",
          "/* commentaire */",
          "Les deux premiers",
        ],
        correctAnswer: 3,
        explanation:
          "La syntaxe '//' est utilisée pour écrire un commentaire sur une seule ligne en PHP. Elle commence par '//' et continue jusqu'à la fin de la ligne.",
      },
      {
        id: 82,
        question: "Comment se nomme l’opérateur de résolution de portée ?",
        options: ["->", "::", ".", "#"],
        correctAnswer: 1,
        explanation:
          "L'opérateur '::' est utilisé pour accéder aux propriétés et aux méthodes statiques d'une classe. Il est suivi du nom de la propriété ou de la méthode.",
      },
      {
        id: 83,
        question: "Que signifie `OOP` en PHP ?",
        options: [
          "Option Overwriting Protocol",
          "Object-Oriented Programming",
          "Open Object Process",
          "Object Operational Path",
        ],
        correctAnswer: 1,
        explanation:
          "OOP signifie Programmation Orientée Objet. C'est un paradigme de programmation qui utilise des objets et des classes pour organiser le code.",
      },
      {
        id: 84,
        question: "Quelle méthode permet de désérialiser une chaîne ?",
        options: ["unserialize()", "decode()", "json_decode()", "extract()"],
        correctAnswer: 0,
        explanation:
          "La fonction 'unserialize()' est utilisée pour convertir une chaîne JSON en un tableau PHP. Elle prend en argument la chaîne JSON.",
      },
      {
        id: 85,
        question: 'Comment afficher "Bonjour" avec PHP ?',
        options: [
          'echo("Bonjour");',
          'print("Bonjour");',
          'printf("Bonjour");',
          "Toutes ces réponses",
        ],
        correctAnswer: 3,
        explanation:
          "Les trois fonctions 'echo()', 'print()' et 'printf()' sont utilisées pour afficher du texte à l'écran en PHP. 'printf()' est souvent utilisé pour formater le texte.",
      },
      {
        id: 86,
        question: "Quelle fonction retourne l’heure actuelle ?",
        options: ["time()", "now()", "getTime()", "date_now()"],
        correctAnswer: 0,
        explanation:
          "La fonction 'time()' est utilisée pour obtenir l'heure actuelle en secondes depuis le 1er janvier 1970. Elle peut être utilisée avec 'date()' pour formater l'heure.",
      },
      {
        id: 87,
        question: "Quel est le rôle de `header()` ?",
        options: [
          "Modifier l’en-tête HTTP",
          "Afficher une page",
          "Rediriger ou modifier HTTP",
          "Créer une variable",
        ],
        correctAnswer: 2,
        explanation:
          "La fonction 'header()' est utilisée pour envoyer des en-têtes HTTP au client. Elle peut être suivie de 'send()' pour envoyer le corps de la réponse.",
      },
      {
        id: 88,
        question: "Que fait `ob_start()` ?",
        options: [
          "Ouvre un fichier",
          "Démarre la sortie tampon",
          "Démarre une session",
          "Efface un tampon",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'ob_start()' est utilisée pour démarrer la sortie tampon en PHP. Elle permet de capturer la sortie HTML avant qu'elle ne soit envoyée au client.",
      },
      {
        id: 89,
        question: "Quelle extension permet l’utilisation de PDO avec MySQL ?",
        options: ["pdo_mysql", "pdo_pgsql", "mysqli", "pdo_sqlite"],
        correctAnswer: 0,
        explanation:
          "L'extension 'pdo_mysql' est utilisée pour interagir avec une base de données MySQL via PDO. Elle permet de créer des connexions, exécuter des requêtes, etc.",
      },
      {
        id: 90,
        question: "Quel est le rôle de `__construct()` ?",
        options: [
          "Méthode de destruction",
          "Méthode d’initialisation",
          "Méthode magique d’appel",
          "Méthode finale",
        ],
        correctAnswer: 1,
        explanation:
          "La méthode magique '__construct()' est appelée lorsqu'une nouvelle instance d'une classe est créée. Elle est souvent utilisée pour initialiser les propriétés de l'objet.",
      },
      {
        id: 91,
        question: "Que signifie `CLI` ?",
        options: [
          "Command Line Interface",
          "Central Logic Interface",
          "Command Logic Interpreter",
          "Common Library Integration",
        ],
        correctAnswer: 0,
        explanation:
          "CLI signifie Interface de Ligne de Commande. Elle permet d'exécuter des scripts PHP depuis la ligne de commande.",
      },
      {
        id: 92,
        question: "Comment vérifier si un fichier existe ?",
        options: ["exists()", "file_exists()", "check_file()", "is_file()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'file_exists()' est utilisée pour vérifier si un fichier existe à un chemin spécifique. Elle retourne TRUE si le fichier existe, FALSE sinon.",
      },
      {
        id: 93,
        question: "Quel mot-clé permet d’utiliser un espace de noms ?",
        options: ["use", "include", "require", "namespace"],
        correctAnswer: 0,
        explanation:
          "Le mot-clé 'use' est utilisé pour utiliser un espace de noms en PHP. Il est suivi du nom de l'espace de noms.",
      },
      {
        id: 94,
        question: "Quel mot-clé permet de définir un trait ?",
        options: ["class", "trait", "extends", "implements"],
        correctAnswer: 1,
        explanation:
          "Le mot-clé 'trait' est utilisé pour définir un trait en PHP. Un trait est un ensemble de méthodes qui peuvent être réutilisées dans plusieurs classes.",
      },
      {
        id: 95,
        question:
          "Quelle méthode est appelée lors de la destruction d’un objet ?",
        options: ["__destroy()", "__destruct()", "destroy()", "destruct()"],
        correctAnswer: 1,
        explanation:
          "La méthode magique '__destruct()' est appelée lorsqu'un objet PHP est détruit. Elle est souvent utilisée pour libérer des ressources.",
      },
      {
        id: 96,
        question: "Quel opérateur permet la concaténation en PHP ?",
        options: ["+", ".", "&", "::"],
        correctAnswer: 1,
        explanation:
          "L'opérateur '.' est utilisé pour la concaténation de chaînes de caractères en PHP. Il permet de combiner plusieurs chaînes.",
      },
      {
        id: 97,
        question: "Quelle est la sortie de `var_dump(null)` ?",
        options: ["bool(false)", "NULL", "0", "undefined"],
        correctAnswer: 1,
        explanation:
          "La fonction 'var_dump()' est utilisée pour afficher des informations détaillées sur une variable, y compris son type et sa valeur. Dans ce cas, 'var_dump(null)' affiche 'NULL'.",
      },
      {
        id: 98,
        question: "Que fait `strtolower()` ?",
        options: [
          "Convertit en majuscules",
          "Convertit en minuscules",
          "Compresse la chaîne",
          "Transforme en tableau",
        ],
        correctAnswer: 1,
        explanation:
          "La fonction 'strtolower()' est utilisée pour convertir une chaîne de caractères en minuscules. Elle prend en argument la chaîne à convertir.",
      },
      {
        id: 99,
        question:
          "Quelle fonction permet de lire tous les fichiers d’un dossier ?",
        options: ["read_dir()", "scandir()", "listdir()", "dir_list()"],
        correctAnswer: 1,
        explanation:
          "La fonction 'scandir()' est utilisée pour lire le contenu d'un dossier. Elle prend en argument le chemin du dossier et retourne un tableau des fichiers et dossiers.",
      },
      {
        id: 100,
        question: "Quelle est la sortie de `true && false` ?",
        options: ["true", "false", "1", "0"],
        correctAnswer: 1,
        explanation:
          "L'opérateur '&&' (ET logique) retourne FALSE si l'une des deux valeurs est FALSE. Dans ce cas, 'true && false' retourne FALSE.",
      },
    ],
  },
  {
     id: "Laravel - Basique",
    name: "Laravel - Basique",
    icon: "🧠",
    description: "Approfondissez vos connaissances LARAVEL",
    color: "from-pink-500 to-red-600",
    questions: [
       {
      id: 1,
      question: "Quelle commande crée un nouveau projet Laravel ?",
      options: [
        "composer create-project laravel/laravel mon-projet",
        "php artisan new mon-projet",
        "npm create laravel@latest mon-projet",
        "composer laravel new mon-projet"
      ],
      correctAnswer: 0,
      explanation: "La méthode standard est `composer create-project laravel/laravel mon-projet`."
    },
    {
      id: 2,
      question: "Dans quel fichier déclare-t-on les routes web par défaut ?",
      options: ["routes/web.php", "routes/api.php", "app/Http/routes.php", "config/routes.php"],
      correctAnswer: 0,
      explanation: "Les routes HTTP classiques sont définies dans `routes/web.php`."
    },
    {
      id: 3,
      question: "Quel moteur de templates Laravel utilise pour les vues ?",
      options: ["Blade", "Twig", "Mustache", "Handlebars"],
      correctAnswer: 0,
      explanation: "Laravel utilise Blade (`.blade.php`) pour ses vues."
    },
    {
      id: 4,
      question: "Quelle commande exécute les migrations ?",
      options: ["php artisan migrate", "php artisan make:migration", "php artisan db:seed", "php artisan schema:run"],
      correctAnswer: 0,
      explanation: "`php artisan migrate` applique les migrations en attente."
    },
    {
      id: 5,
      question: "Où se trouvent les contrôleurs par défaut ?",
      options: ["app/Http/Controllers", "app/Controllers", "routes/Controllers", "resources/controllers"],
      correctAnswer: 0,
      explanation: "Par convention, les contrôleurs sont dans `app/Http/Controllers`."
    },
    {
      id: 6,
      question: "Quel dossier stocke les vues Blade ?",
      options: ["resources/views", "app/views", "public/views", "storage/views"],
      correctAnswer: 0,
      explanation: "Les vues sont dans `resources/views`."
    },
    {
      id: 7,
      question: "Comment renvoyer une réponse JSON depuis un contrôleur ?",
      options: [
        "return response()->json($data);",
        "return json_encode($data);",
        "echo json($data);",
        "return Response::toJson($data);"
      ],
      correctAnswer: 0,
      explanation: "`response()->json($data)` crée une réponse JSON avec les bons en-têtes."
    },
    {
      id: 8,
      question: "Quelle façade est utilisée pour le cache ?",
      options: ["Cache", "Storage", "Config", "Queue"],
      correctAnswer: 0,
      explanation: "La façade `Cache` expose `get`, `put`, `remember`, etc."
    },
    {
      id: 9,
      question: "Quelle commande lance un serveur de développement ?",
      options: ["php artisan serve", "npm run dev", "composer serve", "php -S app.php"],
      correctAnswer: 0,
      explanation: "`php artisan serve` démarre un serveur local sur un port libre."
    },
    {
      id: 10,
      question: "Où se trouvent les fichiers de configuration ?",
      options: ["config/", "app/Config", "resources/config", "bootstrap/config"],
      correctAnswer: 0,
      explanation: "Les fichiers de configuration sont dans le dossier `config/`."
    },
    {
      id: 11,
      question: "Qu’est-ce qu’Eloquent dans Laravel ?",
      options: [
        "Un ORM (Object-Relational Mapper)",
        "Un moteur de queue",
        "Un système de vues",
        "Un planificateur de tâches"
      ],
      correctAnswer: 0,
      explanation: "Eloquent est l’ORM de Laravel pour interagir avec la base de données."
    },
    {
      id: 12,
      question: "Quelle méthode Eloquent lève une exception si aucun résultat n’est trouvé ?",
      options: ["first()", "find()", "firstOrFail()", "get()"],
      correctAnswer: 2,
      explanation: "`firstOrFail()` (ou `findOrFail()`) lève une `ModelNotFoundException`."
    },
    {
      id: 13,
      question: "Quel fichier contient la configuration de la connexion base de données ?",
      options: ["config/database.php", "config/db.php", ".env", "database/config.php"],
      correctAnswer: 0,
      explanation: "La configuration est dans `config/database.php` (valeurs provenant de `.env`)."
    },
    {
      id: 14,
      question: "Comment accéder proprement à APP_NAME dans l’application ?",
      options: ["config('app.name')", "env('APP_NAME') en contrôleur", "getenv('app.name')", "request()->env('APP_NAME')"],
      correctAnswer: 0,
      explanation: "Lis dans `config('app.name')` (les configs pouvant être mises en cache)."
    },
    {
      id: 15,
      question: "Comment définir rapidement une route GET simple ?",
      options: [
        "Route::get('/hello', fn() => 'Hello');",
        "Route::route('/hello', 'GET');",
        "Router::get('/hello');",
        "Route::any('/hello');"
      ],
      correctAnswer: 0,
      explanation: "La fonction fléchée est supportée pour des closures simples."
    },
    {
      id: 16,
      question: "Quelle commande génère un contrôleur resource ?",
      options: [
        "php artisan make:controller UserController --resource",
        "php artisan make:controller --rest UserController",
        "php artisan controller:make UserController",
        "php artisan make:controller UserController --crud"
      ],
      correctAnswer: 0,
      explanation: "`--resource` crée les méthodes REST communes."
    },
    {
      id: 17,
      question: "Quelle commande crée un modèle avec migration associée ?",
      options: [
        "php artisan make:model Post -m",
        "php artisan make:model Post --mig",
        "php artisan model:make Post -m",
        "php artisan make:migration Post"
      ],
      correctAnswer: 0,
      explanation: "`-m` génère la migration en même temps que le modèle."
    },
    {
      id: 18,
      question: "Quel dossier contient les seeders par défaut ?",
      options: ["database/seeders", "database/seeds", "app/Seeders", "config/seeders"],
      correctAnswer: 0,
      explanation: "Depuis Laravel 8+, les seeders sont dans `database/seeders`."
    },
    {
      id: 19,
      question: "Comment exécuter les seeders ?",
      options: [
        "php artisan db:seed",
        "php artisan migrate:seed",
        "php artisan seed:run",
        "php artisan db:run"
      ],
      correctAnswer: 0,
      explanation: "`php artisan db:seed` (souvent après `migrate:fresh --seed`)."
    },
    {
      id: 20,
      question: "Quelle méthode de Request récupère une valeur d’entrée ?",
      options: ["$request->input('key')", "Request::get('key')", "$request->value('key')", "input('key') sans Request"],
      correctAnswer: 0,
      explanation: "`$request->input()` (ou `$request->get()`) lit les entrées."
    },
    {
      id: 21,
      question: "Quel middleware protège contre les attaques CSRF ?",
      options: ["VerifyCsrfToken", "TrimStrings", "EncryptCookies", "ThrottleRequests"],
      correctAnswer: 0,
      explanation: "Le middleware `VerifyCsrfToken` gère le token CSRF des formulaires."
    },
    {
      id: 22,
      question: "Quelle commande vide le cache de configuration ?",
      options: [
        "php artisan config:clear",
        "php artisan cache:reset",
        "php artisan clear:config",
        "php artisan app:clear"
      ],
      correctAnswer: 0,
      explanation: "`config:clear` supprime le cache des configurations."
    },
    {
      id: 23,
      question: "Quel helper génère une URL signée temporaire ?",
      options: ["URL::temporarySignedRoute()", "route()", "url()", "asset()"],
      correctAnswer: 0,
      explanation: "Les URLs signées permettent de vérifier l’intégrité et l’expiration."
    },
    {
      id: 24,
      question: "Comment stocker un fichier sur le disque par défaut ?",
      options: [
        "Storage::put('file.txt', 'contenu');",
        "File::store('file.txt', 'contenu');",
        "Storage::store('file.txt', 'contenu');",
        "Disk::putDefault('file.txt', 'contenu');"
      ],
      correctAnswer: 0,
      explanation: "`Storage` est la façade pour le Filesystem (local/S3/etc.)."
    },
    {
      id: 25,
      question: "Quelle méthode de route applique un middleware ?",
      options: ["->middleware('auth')", "->guard('auth')", "->use('auth')", "->with('auth')"],
      correctAnswer: 0,
      explanation: "On chaîne `->middleware()` sur la définition de route."
    },
    {
      id: 26,
      question: "Quel artisan liste toutes les routes ?",
      options: [
        "php artisan route:list",
        "php artisan routes",
        "php artisan list:routes",
        "php artisan route:show"
      ],
      correctAnswer: 0,
      explanation: "`route:list` affiche méthodes, URI, nom, action, middleware."
    },
    {
      id: 27,
      question: "Quel fichier centralise la définition des commandes planifiées ?",
      options: ["app/Console/Kernel.php", "routes/console.php", "app/Providers/AppServiceProvider.php", "config/schedule.php"],
      correctAnswer: 0,
      explanation: "La méthode `schedule()` du `Console\\Kernel` déclare les tâches."
    },
    {
      id: 28,
      question: "Comment activer le debug bar natif de Laravel ?",
      options: [
        "APP_DEBUG=true dans .env",
        "DEBUG_BAR=true dans .env",
        "Installer par défaut aucune action",
        "php artisan debug:on"
      ],
      correctAnswer: 0,
      explanation: "Mettre `APP_DEBUG=true` active l’affichage des erreurs détaillées."
    },
    {
      id: 29,
      question: "Quelle méthode de validation rapide existe sur la Request ?",
      options: ["$request->validate([...])", "Validator::quick([...])", "$request->rules([...])", "Form::validate([...])"],
      correctAnswer: 0,
      explanation: "`$request->validate()` valide et redirige automatiquement en cas d’erreur."
    },
    {
      id: 30,
      question: "Quel artisan crée un Form Request dédié ?",
      options: [
        "php artisan make:request StorePostRequest",
        "php artisan make:form StorePostRequest",
        "php artisan request:make StorePostRequest",
        "php artisan make:formrequest StorePostRequest"
      ],
      correctAnswer: 0,
      explanation: "`make:request` génère une classe pour `authorize()` et `rules()`."
    },
    ],
  },
  {
     id: "Laravel - Junior",
    name: "Laravel - Junior",
    icon: "🧠",
    description: "Approfondissez vos connaissances LARAVEL",
    color: "from-pink-500 to-red-600",
    questions: [
      {
      id: 31,
      question: "Quelle méthode applique un eager loading à la requête Eloquent ?",
      options: ["with()", "load()", "append()", "sync()"],
      correctAnswer: 0,
      explanation: "`with()` charge les relations au moment de la requête."
    },
    {
      id: 32,
      question: "Comment définir une relation One‑to‑Many côté parent ?",
      options: ["hasMany()", "belongsTo()", "morphMany()", "hasOneThrough()"],
      correctAnswer: 0,
      explanation: "`hasMany()` sur le parent, `belongsTo()` sur l’enfant."
    },
    {
      id: 33,
      question: "Quelle annotation de route nomme une route ?",
      options: ["->name('posts.index')", "->as('posts.index')", "->alias('posts.index')", "->route('posts.index')"],
      correctAnswer: 0,
      explanation: "On enchaîne `->name()` pour nommer une route."
    },
    {
      id: 34,
      question: "Quel artisan publie les assets d’un package ?",
      options: [
        "php artisan vendor:publish",
        "php artisan package:publish",
        "php artisan vendor:assets",
        "php artisan package:assets"
      ],
      correctAnswer: 0,
      explanation: "`vendor:publish` copie les assets/config/views du package."
    },
    {
      id: 35,
      question: "Quel mécanisme permet d’autoriser des actions au niveau modèle ?",
      options: ["Policies", "Migrations", "Seeders", "Broadcasting"],
      correctAnswer: 0,
      explanation: "Les Policies centralisent la logique d’autorisation."
    },
    {
      id: 36,
      question: "Comment injecter un service depuis le conteneur dans un contrôleur ?",
      options: [
        "Via l’injection de dépendances dans la signature de méthode",
        "Via `app()->get()` uniquement",
        "En lisant directement `.env`",
        "En globalisant une variable"
      ],
      correctAnswer: 0,
      explanation: "Le conteneur résout automatiquement les dépendances typées."
    },
    {
      id: 37,
      question: "Quel artisan crée une Policy liée à un modèle ?",
      options: [
        "php artisan make:policy PostPolicy --model=Post",
        "php artisan make:guard PostPolicy",
        "php artisan auth:policy PostPolicy",
        "php artisan make:gate PostPolicy"
      ],
      correctAnswer: 0,
      explanation: "`make:policy --model=` relie la policy au modèle."
    },
    {
      id: 38,
      question: "Quelle méthode effectue une pagination classique ?",
      options: ["paginate()", "chunk()", "simplePaginate()", "cursorPaginate()"],
      correctAnswer: 0,
      explanation: "`paginate()` retourne une pagination avec les liens complets."
    },
    {
      id: 39,
      question: "Comment définir un rate limit personnalisé ?",
      options: [
        "RateLimiter::for('api', fn() => Limit::perMinute(60));",
        "Throttle::set(60);",
        "Limiter::minute(60);",
        "Gate::define('rate', ...);"
      ],
      correctAnswer: 0,
      explanation: "On déclare dans un provider (souvent `RouteServiceProvider`) et on l’utilise avec `throttle:api`."
    },
    {
      id: 40,
      question: "Quelle commande crée un Job pour la file d’attente ?",
      options: [
        "php artisan make:job SendEmail",
        "php artisan make:queue SendEmail",
        "php artisan queue:job SendEmail",
        "php artisan job:create SendEmail"
      ],
      correctAnswer: 0,
      explanation: "`make:job` génère un job dispatchable (sync/queue)."
    },
    {
      id: 41,
      question: "Quel fichier configure les connexions de stockage (ex. S3) ?",
      options: ["config/filesystems.php", "config/storage.php", "config/disks.php", "config/assets.php"],
      correctAnswer: 0,
      explanation: "Les ‘disks’ (local, public, s3, etc.) se déclarent dans `filesystems.php`."
    },
    {
      id: 42,
      question: "Quelle méthode Eloquent synchronise une relation Many‑to‑Many ?",
      options: ["sync()", "attach()", "detach()", "toggle()"],
      correctAnswer: 0,
      explanation: "`sync()` remplace les liaisons par le nouvel ensemble d’IDs."
    },
    {
      id: 43,
      question: "Quelle classe utilisez-vous pour transformer proprement des modèles en JSON d’API ?",
      options: ["JsonResource", "FormRequest", "Seeder", "Factory"],
      correctAnswer: 0,
      explanation: "Les `JsonResource`/`ResourceCollection` normalisent les réponses API."
    },
    {
      id: 44,
      question: "Comment charger paresseusement une relation après récupération du modèle ?",
      options: ["load('relation')", "with('relation')", "eager('relation')", "append('relation')"],
      correctAnswer: 0,
      explanation: "`load()` charge la relation sur des instances existantes."
    },
    {
      id: 45,
      question: "Quelle commande exécute toutes les tâches planifiées une fois ?",
      options: [
        "php artisan schedule:run",
        "php artisan schedule:work",
        "php artisan tasks:run",
        "php artisan cron:run"
      ],
      correctAnswer: 0,
      explanation: "`schedule:run` déclenche les tâches dues à l’instant T."
    },
    {
      id: 46,
      question: "Quel middleware applique une limitation de débit (throttle) ?",
      options: ["throttle:nom", "rate:nom", "limit:nom", "quota:nom"],
      correctAnswer: 0,
      explanation: "On utilise `->middleware('throttle:nom')` après avoir défini `RateLimiter::for('nom', ...)`."
    },
    {
      id: 47,
      question: "Quelle classe centralise les événements et listeners enregistrés ?",
      options: ["EventServiceProvider", "AppServiceProvider", "AuthServiceProvider", "RouteServiceProvider"],
      correctAnswer: 0,
      explanation: "`EventServiceProvider` mappe les events aux listeners."
    },
    {
      id: 48,
      question: "Comment valider des données avec une règle unique et un message personnalisé dans un Form Request ?",
      options: [
        "rules() et messages()",
        "validate() et errors()",
        "schema() et messages()",
        "authorizeRules() et messages()"
      ],
      correctAnswer: 0,
      explanation: "Définir `rules()` puis `messages()` pour customiser les messages."
    },
    {
      id: 49,
      question: "Quel artisan permet de créer un seeder ?",
      options: [
        "php artisan make:seeder UsersTableSeeder",
        "php artisan db:seeder UsersTableSeeder",
        "php artisan seeder:make UsersTableSeeder",
        "php artisan db:seed --make UsersTableSeeder"
      ],
      correctAnswer: 0,
      explanation: "`make:seeder` crée un seeder que l’on référence dans `DatabaseSeeder`."
    },
    {
      id: 50,
      question: "Quelle méthode envoie une notification par mail à un Notifiable ?",
      options: ["notify()", "mail()", "send()", "dispatch()"],
      correctAnswer: 0,
      explanation: "Les modèles utilisant le trait `Notifiable` exposent `notify()`."
    },
    {
      id: 51,
      question: "Quel helper renvoie la réponse de téléchargement d’un fichier stocké ?",
      options: ["Storage::download()", "response()->file()", "Storage::getFile()", "Storage::response()"],
      correctAnswer: 0,
      explanation: "`Storage::download($path)` crée une réponse `attachment`."
    },
    {
      id: 52,
      question: "Comment protéger une route via la policy `update` d’un modèle `Post` ?",
      options: [
        "->can('update', Post::class)",
        "->middleware('policy:update')",
        "->authorize('update')",
        "->gate('update')"
      ],
      correctAnswer: 0,
      explanation: "On peut utiliser le middleware `can`/`->can('update', $post)` ou l’helper `authorize()`."
    },
    {
      id: 53,
      question: "Quelle méthode déclenche un événement manuellement ?",
      options: ["event(new SomethingHappened())", "dispatch(new SomethingHappened())", "broadcast(new SomethingHappened())", "emit(new SomethingHappened())"],
      correctAnswer: 0,
      explanation: "`event()` émet un événement dans le système d’événements Laravel."
    },
    {
      id: 54,
      question: "Quelle relation modélise un `belongsToMany` avec table pivot ?",
      options: ["belongsToMany()", "hasMany()", "morphMany()", "hasOneThrough()"],
      correctAnswer: 0,
      explanation: "`belongsToMany()` gère les relations N‑N via table pivot."
    },
    {
      id: 55,
      question: "Quel artisan génère une Factory de modèle ?",
      options: [
        "php artisan make:factory PostFactory --model=Post",
        "php artisan factory:make PostFactory",
        "php artisan make:model Post --factory-only",
        "php artisan db:factory Post"
      ],
      correctAnswer: 0,
      explanation: "`make:factory` crée une factory typée pour les tests/seed."
    },
    {
      id: 56,
      question: "Quelle méthode de pagination est la plus légère (sans compter le total) ?",
      options: ["simplePaginate()", "paginate()", "cursorPaginate()", "chunk()"],
      correctAnswer: 0,
      explanation: "`simplePaginate()` ne fait pas de COUNT global, plus léger."
    },
    {
      id: 57,
      question: "Comment rediriger vers une route nommée avec paramètres ?",
      options: [
        "return redirect()->route('posts.show', $post);",
        "return redirect('posts.show', $post);",
        "return route()->redirect('posts.show', $post);",
        "return redirect()->toRoute('posts.show', $post);"
      ],
      correctAnswer: 0,
      explanation: "`redirect()->route()` génère l’URL depuis le nom de la route."
    },
    {
      id: 58,
      question: "Quelle classe définit les Gates et Policies globales ?",
      options: ["AuthServiceProvider", "EventServiceProvider", "RouteServiceProvider", "AppServiceProvider"],
      correctAnswer: 0,
      explanation: "On enregistre les policies et gates dans `AuthServiceProvider`."
    },
    {
      id: 59,
      question: "Comment envoyer un email via Mailable ?",
      options: [
        "Mail::to($user)->send(new WelcomeMail());",
        "Mail::sendTo($user, WelcomeMail::class);",
        "Notification::mail($user, WelcomeMail::class);",
        "Mail::queueNow(new WelcomeMail($user));"
      ],
      correctAnswer: 0,
      explanation: "`Mail::to(...)->send(new Mailable)` est l’API standard."
    },
    {
      id: 60,
      question: "Comment invalider une entrée de cache spécifique ?",
      options: ["Cache::forget('clé')", "Cache::clear()", "Cache::flushOne('clé')", "Cache::drop('clé')"],
      correctAnswer: 0,
      explanation: "`Cache::forget('clé')` supprime une clé spécifique."
    },
    ],
  },
  {
     id: "Laravel - Avancé",
    name: "Laravel - Avancé",
    icon: "🧠",
    description: "Approfondissez vos connaissances LARAVEL",
    color: "from-pink-500 to-red-600",
    questions: [
      {
      id: 61,
      question: "Différence clé entre `bind()` et `singleton()` dans le conteneur ?",
      options: [
        "`bind()` crée une nouvelle instance à chaque résolution, `singleton()` partage une instance unique",
        "`bind()` est plus rapide que `singleton()`",
        "`singleton()` n’accepte pas de closures",
        "Aucune différence"
      ],
      correctAnswer: 0,
      explanation: "`bind()` => instances multiples; `singleton()` => une instance partagée."
    },
    {
      id: 62,
      question: "Comment créer un batch de jobs et suivre sa progression ?",
      options: ["Bus::batch([...])->dispatch()", "Queue::bulk([...])", "Bus::chain([...])->dispatch()", "dispatchBatch([...])"],
      correctAnswer: 0,
      explanation: "`Bus::batch()` gère lots, callbacks (then/catch/finally) et suivi."
    },
    {
      id: 63,
      question: "Quel mécanisme diffuse des événements côté client en temps réel ?",
      options: ["Broadcasting (WebSockets)", "Observers", "Notifications database", "Scheduler"],
      correctAnswer: 0,
      explanation: "Le broadcasting (Pusher/Ably/Laravel WebSockets) envoie des événements temps réel."
    },
    {
      id: 64,
      question: "Comment définir un limiter dynamique basé sur l’utilisateur et l’IP ?",
      options: [
        "RateLimiter::for('api', fn (Request $r) => Limit::perMinute(60)->by($r->user()?->id ?: $r->ip()))",
        "Throttle::userIp(60)",
        "Limiter::dynamic(60)",
        "Gate::limit(60)"
      ],
      correctAnswer: 0,
      explanation: "Utiliser `by()` pour l’ID d’utilisateur ou l’IP."
    },
    {
      id: 65,
      question: "Quelle est la bonne pratique pour gérer une transaction DB ?",
      options: [
        "DB::transaction(fn() => /* opérations */);",
        "DB::begin(); /* ... */ DB::commit(); sans try/catch",
        "Toujours désactiver les exceptions PDO",
        "Utiliser `Schema::transaction()`"
      ],
      correctAnswer: 0,
      explanation: "`DB::transaction()` gère commit/rollback automatiquement en cas d’exception."
    },
    {
      id: 66,
      question: "Quel type de relation modélise un polymorphisme (ex. comments sur plusieurs modèles) ?",
      options: ["morphMany/morphTo", "belongsToMany", "hasManyThrough", "hasOneThrough"],
      correctAnswer: 0,
      explanation: "Les relations morphiques (`morphTo`, `morphMany`, etc.) gèrent le polymorphisme."
    },
    {
      id: 67,
      question: "Quelle stratégie de cache pour mémoïser une requête coûteuse avec invalidation simple ?",
      options: [
        "Cache::remember('clé', ttl, fn() => ...)",
        "Cache::forever('clé', ...)",
        "Stocker en JSON dans public/",
        "Mettre en cache la page entière uniquement"
      ],
      correctAnswer: 0,
      explanation: "`remember()` calcule et stocke pour un TTL; `forget('clé')` invalide."
    },
    {
      id: 68,
      question: "Comment créer une règle de validation réutilisable et testable ?",
      options: [
        "php artisan make:rule StrongPassword",
        "Créer une méthode validateX() dans un contrôleur",
        "Ajouter une clé dans config/validation.php",
        "Écrire du JS côté client uniquement"
      ],
      correctAnswer: 0,
      explanation: "`make:rule` génère une classe `passes()`/`message()`."
    },
    {
      id: 69,
      question: "Quelle pagination est optimale pour de très grands datasets avec curseur ?",
      options: ["cursorPaginate()", "paginate()", "simplePaginate()", "chunkPaginate()"],
      correctAnswer: 0,
      explanation: "`cursorPaginate()` évite les offsets coûteux et gère mieux les datasets massifs."
    },
    {
      id: 70,
      question: "Comment observer automatiquement les événements Eloquent d’un modèle ?",
      options: ["Créer un Observer et l’enregistrer", "Utiliser des triggers SQL seulement", "Écouter via EventsService uniquement", "Impossible"],
      correctAnswer: 0,
      explanation: "`make:observer` puis enregistrement sur le modèle (created, updated, etc.)."
    },
    {
      id: 71,
      question: "Quelle approche pour un import massif performant ?",
      options: [
        "Chunking + transactions + `upsert` si possible",
        "Boucle `save()` pour chaque ligne",
        "Désactiver les index en prod",
        "Charger tout en mémoire"
      ],
      correctAnswer: 0,
      explanation: "Utiliser `chunk()`/`upsert`/transactions pour des imports efficaces."
    },
    {
      id: 72,
      question: "Comment éviter le N+1 sur plusieurs relations imbriquées ?",
      options: ["with(['a.b', 'c'])", "loadLater()", "appendAll()", "prefetchAll()"],
      correctAnswer: 0,
      explanation: "Déclarer les chemins relationnels dans `with()` pour l’eager loading."
    },
    {
      id: 73,
      question: "Quelle méthode de Job exécute une tâche immédiatement dans le même process ?",
      options: ["dispatchSync()", "dispatch()", "dispatchNow()", "queueSync()"],
      correctAnswer: 0,
      explanation: "`dispatchSync()` (ou `dispatchNow()` selon version) exécute immédiatement."
    },
    {
      id: 74,
      question: "Comment structurer proprement les réponses d’erreurs d’API ?",
      options: [
        "Utiliser exceptions personnalisées + Handler + JsonResource pour normaliser",
        "Toujours `dd()` les erreurs",
        "Retourner des chaînes en clair",
        "Écrire dans un fichier log et ne rien renvoyer"
      ],
      correctAnswer: 0,
      explanation: "Centraliser dans `app/Exceptions/Handler.php` et garder un format JSON cohérent."
    },
    {
      id: 75,
      question: "Quel pattern d’architecture aide à séparer Eloquent de la logique métier ?",
      options: ["Repository + Service", "Fat Controller", "God Model", "Tout dans routes/web.php"],
      correctAnswer: 0,
      explanation: "Repository/Service isole l’accès aux données et la logique métier."
    },
    {
      id: 76,
      question: "Quelle méthode de cache évite les thundering herds sur une clé partagée ?",
      options: [
        "Cache::remember('clé', ttl, fn() => ...)",
        "Cache::put('clé', ...)",
        "Cache::forever('clé', ...)",
        "Cache::lock('clé')->get(function(){ ... })"
      ],
      correctAnswer: 3,
      explanation: "Un `lock()` distribué (supporté par Redis) sérielise l’accès concurrent."
    },
    {
      id: 77,
      question: "Quel composant gère l’abstraction de la file d’attente (drivers sync, database, redis, etc.) ?",
      options: ["Queue (Illuminate\\Queue)", "Bus (Illuminate\\Bus)", "Events", "Broadcasting"],
      correctAnswer: 0,
      explanation: "Le système de queue fournit une API unique pour divers drivers."
    },
    {
      id: 78,
      question: "Comment partager des données avec toutes les vues Blade ?",
      options: ["View::share('key', $value)", "config(['view.key' => $value])", "Blade::global('key', $value)", "App::share('view', $value)"],
      correctAnswer: 0,
      explanation: "`View::share()` rend la variable disponible globalement aux vues."
    },
    {
      id: 79,
      question: "Quelle technique pour des exports CSV volumineux sans mémoire excessive ?",
      options: [
        "Flux de réponse en streaming (chunk/Generator)",
        "Construire une énorme chaîne puis retourner",
        "Tout charger en collection puis `implode()`",
        "Toujours utiliser `->get()` sans pagination"
      ],
      correctAnswer: 0,
      explanation: "Streamer la réponse avec des chunks limite la mémoire."
    },
    {
      id: 80,
      question: "Comment organiser des validations complexes conditionnelles ?",
      options: [
        "Rules conditionnelles (Rule::when) / `sometimes` / `bail` + Form Request",
        "Tout dans le contrôleur avec `if`/`else`",
        "Uniquement côté front",
        "Sans messages personnalisés"
      ],
      correctAnswer: 0,
      explanation: "Utiliser `Rule::when`, `sometimes`, `bail` dans un `FormRequest` dédié."
    },
    {
      id: 81,
      question: "Quelle solution pour exécuter des commandes artisan planifiées sans cron du système ?",
      options: ["php artisan schedule:work", "php artisan schedule:queue", "php artisan cron:emulate", "php artisan run:schedule"],
      correctAnswer: 0,
      explanation: "`schedule:work` boucle et exécute les tâches prévues, utile en environnements restreints."
    },
    {
      id: 82,
      question: "Quel outil Laravel facilite le test des événements, jobs et notifications ?",
      options: ["fakes (Event::fake, Queue::fake, Notification::fake)", "Mocks PHP natifs uniquement", "Tests manuels en prod", "Aucun"],
      correctAnswer: 0,
      explanation: "Les *fakes* isolent et asservent les side-effects dans les tests."
    },
    {
      id: 83,
      question: "Comment sécuriser une API avec tokens personnels en Laravel 11 ?",
      options: ["Laravel Sanctum", "Laravel Passport obligatoire", "JWT personnalisé uniquement", "Sessions PHP uniquement"],
      correctAnswer: 0,
      explanation: "Sanctum fournit une solution légère pour SPA/Mobile/API avec tokens personnels."
    },
    {
      id: 84,
      question: "Quelle directive Blade évite l’échappement automatique d’une variable (à utiliser avec prudence) ?",
      options: ["{!! $var !!}", "{{ $var }}", "@raw($var)", "@unescape($var)"],
      correctAnswer: 0,
      explanation: "`{{ }}` échappe; `{!! !!}` affiche brut (risque XSS si non maîtrisé)."
    },
    {
      id: 85,
      question: "Quel mécanisme pour des tâches récurrentes robustes avec reprise en cas d’échec ?",
      options: ["Jobs + retries + backoff + `failed()`", "Boucle `while(true)` en contrôleur", "cron uniquement", "JavaScript setInterval"],
      correctAnswer: 0,
      explanation: "Configurer `tries`, `backoff`, gérer `failed()` et un worker queue fiable."
    },
    {
      id: 86,
      question: "Comment limiter l’exposition des attributs sensibles dans les réponses Eloquent ?",
      options: ["$hidden et $visible sur le modèle", "Toujours tout exposer", "Filtrer côté client", "Renommer les colonnes"],
      correctAnswer: 0,
      explanation: "`$hidden` masque, `$visible` liste blanche; ou utiliser des Resources."
    },
    {
      id: 87,
      question: "Meilleure pratique pour configurer des événements broadcast privés pour un utilisateur ?",
      options: [
        "Canaux privés `private-user.{id}` + autorisation via `BroadcastServiceProvider`",
        "Canaux publics uniquement",
        "Pas d’autorisation nécessaire",
        "Embed des tokens dans l’URL"
      ],
      correctAnswer: 0,
      explanation: "Déclarer le canal privé et la closure d’autorisation qui vérifie l’utilisateur."
    },
    {
      id: 88,
      question: "Comment gérer proprement des opérations longues dans une requête HTTP ?",
      options: [
        "Déporter via Job en queue et renvoyer 202 Accepted avec polling/webhooks",
        "Augmenter indéfiniment le timeout",
        "Boucler jusqu’à terminer",
        "Désactiver PHP max_execution_time"
      ],
      correctAnswer: 0,
      explanation: "Asynchroniser via queue et fournir un suivi côté client."
    },
    {
      id: 89,
      question: "Quelle méthode garantit l’atomicité d’une mise à jour conditionnelle (ex. compteur) ?",
      options: ["DB::raw + transactions / `increment()`", "Lire puis écrire sans lock", "Mettre un `sleep()`", "Utiliser `cache()`"],
      correctAnswer: 0,
      explanation: "`increment()`/`decrement()` s’exécutent côté DB; combiner avec transactions si nécessaire."
    },
    {
      id: 90,
      question: "Comment construire un pipeline de traitement modulaire (ex. traitement d’un import) ?",
      options: [
        "Illuminate\\Pipeline\\Pipeline avec une suite de classes middleware-like",
        "Tout dans une seule méthode",
        "Observers uniquement",
        "Events uniquement"
      ],
      correctAnswer: 0,
      explanation: "Le composant `Pipeline` enchaîne des étapes réutilisables et testables."
    }
  ]
},
];
export default quizCategories;
