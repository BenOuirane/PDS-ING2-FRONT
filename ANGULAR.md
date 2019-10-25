pds_aled_frontend : Angular  8 App

Le projet est à ouvrir sur un éditeur de texte standard, pas Eclipse, pas IntelliJ (Atom de préférence)

Lorsque vous récupérer les fichiers de pds_aled_front, il faut :
- Ouvrir un terminal et se mettre à l’endroit de ‘pds_aled_front’
- Lancer ‘npm install’

 /!\  /!\  /!\  /!\ N'oubliez pas de modifier l'attribut "baseUrl" en vue de tester en local, il y a plus de précisions dans le code


Pour tester l’application en local, il faut lancer la commande dans le dossier 'pds_aled_front' : ‘ng serve’

Pour builder l’application en vue de la déployer, il faut lancer la commande dans le dossier 'pds_aled_front' : ‘ng build’
- Un dossier ‘/dist’ sera créé à la racine de ‘pds_aled_front’ et il contiendra ce qu’il faudra déployer sur le serveur

L'application fonctionne grâce à des composants (components):
- C'est une fonctionnalité qui est en relation avec une entité, exemple : users_list qui va permettre de lister les utilisateurs
- Dans chaque composant il y a :
    - un .html : qui contient l'HTML en relation avec le composant
    - un .ts : qui contient tout ce qui est
    - un .scss : qui contient les styles qui sont en relation avec l'html (https://sass-lang.com/guide --> regarder la documentation pour le language 'SCSS' et non pas Sass)
    - un .spec.ts : à voir plus tard
- Pour en créer un, il faut lancer 'ng g component nom_du_composant'
