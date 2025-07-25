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
  },

  {
    id: 'php-base',
    name: 'PHP - Bases 1',
    icon: '🐘',
    description: 'Les fondamentaux du langage PHP',
    color: 'from-indigo-500 to-blue-600',
    questions: [
      {
        id: 1,
        question: 'Quelle est l’extension standard d’un fichier PHP ?',
        options: ['.html', '.ph', '.php', '.js'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'Quel mot-clé est utilisé pour déclarer une fonction en PHP ?',
        options: ['method', 'func', 'function', 'define'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Quel est le résultat de `echo 2 + "2 chats";` ?',
        options: ['22', '4', 'Erreur', '2'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Comment déclare-t-on une variable en PHP ?',
        options: ['var x;', '$x;', 'let x;', 'x = 0;'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Quelle fonction permet d’afficher une information à l’écran ?',
        options: ['print()', 'alert()', 'console.log()', 'display()'],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Quelle est la bonne syntaxe pour les commentaires sur une ligne ?',
        options: ['/* ... */', '# ...', '// ...', '<!-- ... -->'],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'Quelle superglobale contient les données envoyées en POST ?',
        options: ['$_POST', '$POST', 'POST', '$_DATA'],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Que fait `isset()` en PHP ?',
        options: ['Crée une variable', 'Teste si une variable est définie', 'Efface une variable', 'Initialise à NULL'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'Quel est le type retourné par `gettype("123")` ?',
        options: ['integer', 'string', 'number', 'text'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Que renvoie `empty("")` ?',
        options: ['true', 'false', 'null', 'Erreur'],
        correctAnswer: 0
      },
      {
        id: 11,
        question: 'Quelle fonction permet d’inclure un fichier PHP une seule fois ?',
        options: ['include', 'import', 'require_once', 'add'],
        correctAnswer: 2
      },
      {
        id: 12,
        question: 'Quel est l’opérateur de concaténation en PHP ?',
        options: ['+', '.', '&', '++'],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'Comment appelle-t-on une fonction de manière récursive ?',
        options: ['En appelant une autre fonction', 'En appelant elle-même', 'Impossible en PHP', 'Avec `loop()`'],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'Que signifie l’acronyme PHP ?',
        options: ['Personal Home Page', 'PHP: Hypertext Preprocessor', 'Private Hosting Provider', 'Page Hosting PHP'],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'Quelle structure de contrôle n’existe pas en PHP ?',
        options: ['if', 'match', 'foreach', 'switch'],
        correctAnswer: 1
      },
      {
        id: 16,
        question: 'Quelle fonction sert à compter les éléments d’un tableau ?',
        options: ['length()', 'count()', 'size()', 'sum()'],
        correctAnswer: 1
      },
      {
        id: 17,
        question: 'Quel symbole est utilisé pour accéder à une propriété dans une classe ?',
        options: ['.', '->', '::', '$'],
        correctAnswer: 1
      },
      {
        id: 18,
        question: 'Quel mot-clé permet d’hériter d’une classe ?',
        options: ['include', 'extends', 'implements', 'inherits'],
        correctAnswer: 1
      },
      {
        id: 19,
        question: 'Quel est le rôle de `die()` ou `exit()` ?',
        options: ['Arrêter le script', 'Afficher une erreur', 'Créer un fichier', 'Supprimer une variable'],
        correctAnswer: 0
      },
      {
        id: 20,
        question: 'Quelle méthode supprime une session ?',
        options: ['session_destroy()', 'session_delete()', 'unset()', 'remove_session()'],
        correctAnswer: 0
      },
      {
        id: 21,
        question: 'Quelle fonction vérifie si un fichier existe ?',
        options: ['exists()', 'file_exists()', 'check_file()', 'is_file()'],
        correctAnswer: 1
      },
      {
        id: 22,
        question: 'Quelle est la valeur de retour d’une fonction sans `return` ?',
        options: ['0', 'null', 'true', 'undefined'],
        correctAnswer: 1
      },
      {
        id: 23,
        question: 'Que retourne `strpos("bonjour", "jour")` ?',
        options: ['false', '3', '4', '5'],
        correctAnswer: 2
      },
      {
        id: 24,
        question: 'PHP est-il sensible à la casse ?',
        options: ['Oui', 'Non', 'Parfois', 'Uniquement pour les fonctions'],
        correctAnswer: 0
      },
      {
        id: 25,
        question: 'Quelle méthode permet d’envoyer un header HTTP ?',
        options: ['http_send()', 'header()', 'redirect()', 'set_header()'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'php-avance',
    name: 'PHP - Avancé',
    icon: '🧠',
    description: 'Approfondissez vos connaissances PHP',
    color: 'from-pink-500 to-red-600',
    questions: [
      {
        id: 26,
        question: 'Quel mot-clé définit une interface ?',
        options: ['interface', 'class', 'trait', 'abstract'],
        correctAnswer: 0
      },
      {
        id: 27,
        question: 'Quelle est la portée d’une variable déclarée avec `static` ?',
        options: ['Globale', 'Session', 'Locale mais persistante', 'Illimitée'],
        correctAnswer: 2
      },
      {
        id: 28,
        question: 'Quelle fonction permet de sérialiser un tableau ?',
        options: ['serialize()', 'toJSON()', 'pack()', 'array_flatten()'],
        correctAnswer: 0
      },
      {
        id: 29,
        question: 'Que fait `json_encode()` ?',
        options: ['Encode du HTML', 'Encode en Base64', 'Encode en JSON', 'Crypte la chaîne'],
        correctAnswer: 2
      },
      {
        id: 30,
        question: 'Quelle classe permet de manipuler une base de données PDO ?',
        options: ['PDO', 'MySQL', 'DB', 'Connector'],
        correctAnswer: 0
      },
      {
        id: 31,
        question: 'Quel mot-clé empêche l’héritage d’une classe ?',
        options: ['static', 'final', 'private', 'sealed'],
        correctAnswer: 1
      },
      {
        id: 32,
        question: 'Que signifie le mot-clé `abstract` ?',
        options: ['Méthode accessible uniquement en privé', 'Classe ou méthode partiellement implémentée', 'Classe finale', 'Méthode statique'],
        correctAnswer: 1
      },
      {
        id: 33,
        question: 'Quel mot-clé permet d’utiliser un trait ?',
        options: ['include', 'trait', 'use', 'with'],
        correctAnswer: 2
      },
      {
        id: 34,
        question: 'Quelle méthode PDO exécute une requête préparée ?',
        options: ['execute()', 'prepare()', 'query()', 'run()'],
        correctAnswer: 0
      },
      {
        id: 35,
        question: 'Comment attraper une exception en PHP ?',
        options: ['try/catch', 'catch/throw', 'try/except', 'error_handler'],
        correctAnswer: 0
      },
      {
        id: 36,
        question: 'Quelle fonction permet de charger automatiquement une classe ?',
        options: ['autoload()', '__autoload()', 'load_class()', 'require()'],
        correctAnswer: 1
      },
      {
        id: 37,
        question: 'Que fait la méthode magique `__toString()` ?',
        options: ['Retourne un objet', 'Convertit une chaîne', 'Définit la représentation texte d’un objet', 'Affiche une chaîne'],
        correctAnswer: 2
      },
      {
        id: 38,
        question: 'Quel est le mot-clé pour définir une constante de classe ?',
        options: ['let', 'const', 'define', 'static'],
        correctAnswer: 1
      },
      {
        id: 39,
        question: 'Quelle est la portée d’une propriété `protected` ?',
        options: ['Classe seulement', 'Classe et enfants', 'Partout', 'Fichier actuel uniquement'],
        correctAnswer: 1
      },
      {
        id: 40,
        question: 'Que signifie le mot-clé `namespace` ?',
        options: ['Déclare un dossier', 'Évite les conflits de noms', 'Importe un fichier', 'Crée une base de données'],
        correctAnswer: 1
      },
      {
        id: 41,
        question: 'Comment déclare-t-on un tableau associatif ?',
        options: ['array(0,1,2)', '[]', '["cle" => "valeur"]', '{cle: valeur}'],
        correctAnswer: 2
      },
      {
        id: 42,
        question: 'Quelle méthode récupère toutes les lignes d’un résultat PDO ?',
        options: ['fetchAll()', 'getRows()', 'queryAll()', 'selectAll()'],
        correctAnswer: 0
      },
      {
        id: 43,
        question: 'Quelle fonction permet de supprimer les balises HTML ?',
        options: ['remove_tags()', 'html_strip()', 'strip_tags()', 'clear_html()'],
        correctAnswer: 2
      },
      {
        id: 44,
        question: 'Quel opérateur PHP est le "null coalescing" ?',
        options: ['??', '?:', '&&', '=>'],
        correctAnswer: 0
      },
      {
        id: 45,
        question: 'Quelle extension est souvent utilisée avec Composer ?',
        options: ['vendor/', 'package.json', 'node_modules/', 'config/'],
        correctAnswer: 0
      },
      {
        id: 46,
        question: 'Quelle commande initialise un projet avec Composer ?',
        options: ['composer create', 'composer start', 'composer init', 'composer build'],
        correctAnswer: 2
      },
      {
        id: 47,
        question: 'Quelle structure est correcte pour une boucle while ?',
        options: ['while (i < 10) { ... }', 'while i < 10 { ... }', 'loop (i < 10) { ... }', 'repeat while(i < 10) { ... }'],
        correctAnswer: 0
      },
      {
        id: 48,
        question: 'Que fait `array_merge()` ?',
        options: ['Supprime les doublons', 'Fusionne deux tableaux', 'Trie un tableau', 'Inverse un tableau'],
        correctAnswer: 1
      },
      {
        id: 49,
        question: 'Quel est le rôle de Composer ?',
        options: ['Compiler du code', 'Gérer les dépendances PHP', 'Créer des interfaces', 'Créer des APIs'],
        correctAnswer: 1
      },
      {
        id: 50,
        question: 'Comment accéder à une propriété statique d’une classe ?',
        options: ['self::$prop', 'this->prop', 'class->prop', '$this::$prop'],
        correctAnswer: 0
      }
    ]
  },
  {
  id: 'php2',
  name: 'PHP - Partie 2',
  icon: '🧠',
  description: 'Poursuivez votre révision avancée de PHP',
  color: 'from-indigo-500 to-blue-600',
  questions: [
    {
      id: 51,
      question: 'Quelle est la valeur par défaut de `$_GET` ?',
      options: ['null', 'array vide', 'false', 'undefined'],
      correctAnswer: 1
    },
    {
      id: 52,
      question: 'Quel est le rôle de `session_start()` ?',
      options: [
        'Détruire une session',
        'Initialiser ou reprendre une session',
        'Vider les variables de session',
        'Créer un cookie'
      ],
      correctAnswer: 1
    },
    {
      id: 53,
      question: 'Quelle est la méthode HTTP par défaut utilisée par un formulaire HTML ?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correctAnswer: 0
    },
    {
      id: 54,
      question: 'Quelle superglobale contient les fichiers envoyés via un formulaire ?',
      options: ['$_POST', '$_FILES', '$_REQUEST', '$_UPLOAD'],
      correctAnswer: 1
    },
    {
      id: 55,
      question: 'Que retourne `empty([])` en PHP ?',
      options: ['true', 'false', 'null', 'error'],
      correctAnswer: 0
    },
    {
      id: 56,
      question: 'Quelle fonction permet de supprimer un élément dans un tableau ?',
      options: ['remove()', 'delete()', 'unset()', 'clear()'],
      correctAnswer: 2
    },
    {
      id: 57,
      question: 'Quelle est la différence entre `==` et `===` en PHP ?',
      options: [
        'Aucune différence',
        '=== vérifie uniquement la valeur',
        '=== vérifie valeur et type',
        '== vérifie valeur et type'
      ],
      correctAnswer: 2
    },
    {
      id: 58,
      question: 'Que fait la fonction `explode()` ?',
      options: [
        'Crée une chaîne à partir d’un tableau',
        'Divise une chaîne en un tableau',
        'Supprime des caractères',
        'Fusionne deux chaînes'
      ],
      correctAnswer: 1
    },
    {
      id: 59,
      question: 'Quelle est la portée d’une variable déclarée avec `global` ?',
      options: ['Locale', 'Globale', 'Superglobale', 'Statique'],
      correctAnswer: 1
    },
    {
      id: 60,
      question: 'Que retourne la fonction `isset()` si la variable n’existe pas ?',
      options: ['false', 'true', 'null', 'error'],
      correctAnswer: 0
    },
    {
      id: 61,
      question: 'Quelle est la structure correcte d’une classe en PHP ?',
      options: [
        'def MaClasse { }',
        'function MaClasse() { }',
        'class MaClasse { }',
        'new MaClasse() { }'
      ],
      correctAnswer: 2
    },
    {
      id: 62,
      question: 'Quelle est la visibilité par défaut d’une méthode dans une classe ?',
      options: ['private', 'protected', 'public', 'static'],
      correctAnswer: 2
    },
    {
      id: 63,
      question: 'Comment hérite-t-on d’une classe en PHP ?',
      options: ['class Fille extend Mère', 'class Fille implements Mère', 'class Fille inherits Mère', 'class Fille extends Mère'],
      correctAnswer: 3
    },
    {
      id: 64,
      question: 'Quel mot-clé permet de définir une constante dans une classe ?',
      options: ['define', 'static', 'const', 'final'],
      correctAnswer: 2
    },
    {
      id: 65,
      question: 'Que fait `json_encode()` ?',
      options: ['Décode une chaîne JSON', 'Encode un tableau en JSON', 'Crée un cookie', 'Génère un fichier'],
      correctAnswer: 1
    },
    {
      id: 66,
      question: 'Quel mot-clé permet d’empêcher l’héritage d’une classe ?',
      options: ['private', 'protected', 'final', 'sealed'],
      correctAnswer: 2
    },
    {
      id: 67,
      question: 'Quelle fonction est utilisée pour vérifier si une classe existe ?',
      options: ['is_class()', 'class_exists()', 'check_class()', 'defined_class()'],
      correctAnswer: 1
    },
    {
      id: 68,
      question: 'Quel est le rôle de `PDO::prepare()` ?',
      options: [
        'Exécuter une requête SQL',
        'Préparer une requête paramétrée',
        'Connecter à une base',
        'Créer une table'
      ],
      correctAnswer: 1
    },
    {
      id: 69,
      question: 'Que fait `password_hash()` ?',
      options: [
        'Crypte une image',
        'Génère un mot de passe aléatoire',
        'Hash un mot de passe de manière sécurisée',
        'Vérifie un mot de passe'
      ],
      correctAnswer: 2
    },
    {
      id: 70,
      question: 'Quelle est l’utilité de `filter_var()` ?',
      options: ['Nettoyer une chaîne', 'Valider ou filtrer une variable', 'Crypter une donnée', 'Formater une date'],
      correctAnswer: 1
    },
    {
      id: 71,
      question: 'Que retourne `array_merge([1, 2], [3, 4])` ?',
      options: ['[1, 2]', '[3, 4]', '[1, 2, 3, 4]', 'Erreur'],
      correctAnswer: 2
    },
    {
      id: 72,
      question: 'Quel est le rôle de `mysqli_connect()` ?',
      options: ['Exécuter une requête', 'Se connecter à une base MySQL', 'Créer un utilisateur', 'Créer une base de données'],
      correctAnswer: 1
    },
    {
      id: 73,
      question: 'Quel est le résultat de `count(["a", "b", "c"])` ?',
      options: ['2', '3', '4', '1'],
      correctAnswer: 1
    },
    {
      id: 74,
      question: 'Que permet `foreach` ?',
      options: ['Exécuter une fonction', 'Afficher une variable', 'Parcourir un tableau', 'Créer une boucle infinie'],
      correctAnswer: 2
    },
    {
      id: 75,
      question: 'Comment accéder à une variable de session ?',
      options: ['$_SESSION["nom"]', 'session["nom"]', 'get_session("nom")', '$_SESS["nom"]'],
      correctAnswer: 0
    },
    {
      id: 76,
      question: 'Quelle est la bonne extension de fichier pour un script PHP ?',
      options: ['.ph', '.php', '.phtml', '.script'],
      correctAnswer: 1
    },
    {
      id: 77,
      question: 'Quel est le mot-clé pour définir une méthode statique ?',
      options: ['static', 'const', 'this', 'private'],
      correctAnswer: 0
    },
    {
      id: 78,
      question: 'Que fait `require_once` ?',
      options: ['Inclut un fichier chaque fois', 'Inclut un fichier une seule fois', 'Exécute un script', 'Crée une variable'],
      correctAnswer: 1
    },
    {
      id: 79,
      question: 'Quelle fonction permet de lire une ligne dans un fichier ?',
      options: ['read()', 'fgets()', 'file_get()', 'scan()'],
      correctAnswer: 1
    },
    {
      id: 80,
      question: 'Quelle fonction supprime un fichier ?',
      options: ['file_delete()', 'unlink()', 'remove()', 'delete_file()'],
      correctAnswer: 1
    },
    {
      id: 81,
      question: 'Comment s’écrit un commentaire sur une seule ligne ?',
      options: ['# commentaire', '// commentaire', '/* commentaire */', 'Les deux premiers'],
      correctAnswer: 3
    },
    {
      id: 82,
      question: 'Comment se nomme l’opérateur de résolution de portée ?',
      options: ['->', '::', '.', '#'],
      correctAnswer: 1
    },
    {
      id: 83,
      question: 'Que signifie `OOP` en PHP ?',
      options: ['Option Overwriting Protocol', 'Object-Oriented Programming', 'Open Object Process', 'Object Operational Path'],
      correctAnswer: 1
    },
    {
      id: 84,
      question: 'Quelle méthode permet de désérialiser une chaîne ?',
      options: ['unserialize()', 'decode()', 'json_decode()', 'extract()'],
      correctAnswer: 0
    },
    {
      id: 85,
      question: 'Comment afficher "Bonjour" avec PHP ?',
      options: ['echo("Bonjour");', 'print("Bonjour");', 'printf("Bonjour");', 'Toutes ces réponses'],
      correctAnswer: 3
    },
    {
      id: 86,
      question: 'Quelle fonction retourne l’heure actuelle ?',
      options: ['time()', 'now()', 'getTime()', 'date_now()'],
      correctAnswer: 0
    },
    {
      id: 87,
      question: 'Quel est le rôle de `header()` ?',
      options: ['Modifier l’en-tête HTTP', 'Afficher une page', 'Rediriger ou modifier HTTP', 'Créer une variable'],
      correctAnswer: 2
    },
    {
      id: 88,
      question: 'Que fait `ob_start()` ?',
      options: ['Ouvre un fichier', 'Démarre la sortie tampon', 'Démarre une session', 'Efface un tampon'],
      correctAnswer: 1
    },
    {
      id: 89,
      question: 'Quelle extension permet l’utilisation de PDO avec MySQL ?',
      options: ['pdo_mysql', 'pdo_pgsql', 'mysqli', 'pdo_sqlite'],
      correctAnswer: 0
    },
    {
      id: 90,
      question: 'Quel est le rôle de `__construct()` ?',
      options: ['Méthode de destruction', 'Méthode d’initialisation', 'Méthode magique d’appel', 'Méthode finale'],
      correctAnswer: 1
    },
    {
      id: 91,
      question: 'Que signifie `CLI` ?',
      options: ['Command Line Interface', 'Central Logic Interface', 'Command Logic Interpreter', 'Common Library Integration'],
      correctAnswer: 0
    },
    {
      id: 92,
      question: 'Comment vérifier si un fichier existe ?',
      options: ['exists()', 'file_exists()', 'check_file()', 'is_file()'],
      correctAnswer: 1
    },
    {
      id: 93,
      question: 'Quel mot-clé permet d’utiliser un espace de noms ?',
      options: ['use', 'include', 'require', 'namespace'],
      correctAnswer: 0
    },
    {
      id: 94,
      question: 'Quel mot-clé permet de définir un trait ?',
      options: ['class', 'trait', 'extends', 'implements'],
      correctAnswer: 1
    },
    {
      id: 95,
      question: 'Quelle méthode est appelée lors de la destruction d’un objet ?',
      options: ['__destroy()', '__destruct()', 'destroy()', 'destruct()'],
      correctAnswer: 1
    },
    {
      id: 96,
      question: 'Quel opérateur permet la concaténation en PHP ?',
      options: ['+', '.', '&', '::'],
      correctAnswer: 1
    },
    {
      id: 97,
      question: 'Quelle est la sortie de `var_dump(null)` ?',
      options: ['bool(false)', 'NULL', '0', 'undefined'],
      correctAnswer: 1
    },
    {
      id: 98,
      question: 'Que fait `strtolower()` ?',
      options: ['Convertit en majuscules', 'Convertit en minuscules', 'Compresse la chaîne', 'Transforme en tableau'],
      correctAnswer: 1
    },
    {
      id: 99,
      question: 'Quelle fonction permet de lire tous les fichiers d’un dossier ?',
      options: ['read_dir()', 'scandir()', 'listdir()', 'dir_list()'],
      correctAnswer: 1
    },
    {
      id: 100,
      question: 'Quelle est la sortie de `true && false` ?',
      options: ['true', 'false', '1', '0'],
      correctAnswer: 1
    }
  ]
}


];
export default quizCategories