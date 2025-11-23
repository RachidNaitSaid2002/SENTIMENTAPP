# Projet SentimentApp

## Aperçu du projet

SentimentApp est une application web comprenant un backend et un frontend. Le backend est développé avec FastAPI, utilisant une base de données pour gérer les utilisateurs et les prédictions basées sur le texte. Le frontend est une application moderne construite avec Next.js et React, offrant une interface utilisateur pour interagir avec le système.

## Backend

- Le backend utilise FastAPI pour créer une API REST sécurisée avec JWT.
- Fonctionnalités :
  - Inscription et authentification des utilisateurs.
  - Prédiction de texte via un modèle de machine learning.
  - Stockage et récupération des prédictions associées aux utilisateurs.
- Technologies : Python, FastAPI, SQLAlchemy, PostgreSQL (via psycopg2), OAuth JWT, passlib pour le hachage des mots de passe.
- Les dépendances principales sont listées dans `backend/requirements.txt`.

### Lancer le backend

1. Créez un environnement virtuel Python et activez-le.
2. Installez les dépendances :  
   `pip install -r backend/requirements.txt`
3. Configurez vos variables d'environnement dans un fichier `.env` (notamment `SECRET_KEY` et `ALGORITHM` pour JWT).
4. Lancez le serveur :  
   `uvicorn backend.main:app --reload`

## Frontend

- Le frontend est basé sur Next.js (React) avec TypeScript.
- Utilise TailwindCSS pour les styles.
- Fournit une interface utilisateur pour la connexion, l'inscription, et l'interaction avec les prédictions.

### Lancer le frontend

1. Installez les dépendances :  
   `npm install` dans le dossier `frontend`
2. Lancez le serveur de développement :  
   `npm run dev`
3. Ouvrez [http://localhost:3000] dans votre navigateur.

---

Ce projet permet à un utilisateur de s'inscrire, se connecter, envoyer du texte pour une prédiction via un modèle ML, et afficher les résultats de ces prédictions.
