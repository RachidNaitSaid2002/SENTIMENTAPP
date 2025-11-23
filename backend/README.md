# Backend SentimentApp

### Technologies Utilisées
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=flat-square) ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white&style=flat-square) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat-square) ![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-000000?logo=sqlalchemy&logoColor=white&style=flat-square) ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=flat-square)

## Description

Ce backend est développé avec FastAPI pour fournir une API REST sécurisée avec authentification JWT. Il gère l'inscription et la connexion des utilisateurs, permet la soumission de textes pour des prédictions via un modèle de machine learning, et stocke ces prédictions dans une base de données.

## Fonctionnalités principales

- Inscription d’utilisateurs avec hachage sécurisé des mots de passe.
- Authentification JWT pour sécuriser les endpoints.
- Endpoint de prédiction de texte utilisant un modèle ML.
- Gestion et récupération des prédictions par utilisateur.
- Intégration CORS pour permettre les requêtes depuis le frontend.

## Dépendances

Les dépendances sont listées dans `requirements.txt` et incluent :

- FastAPI
- Uvicorn
- SQLAlchemy
- Psycopg2 (PostgreSQL)
- Passlib (sécurité)
- Python-JOSE (JWT)
- dotenv (gestion variables d’environnement)
- huggingface_hub (pour les modèles ML)

## Installation et Lancement

1. Créez un environnement virtuel Python et activez-le :

   ```bash
   python -m venv venv
   source venv/bin/activate   # Sur Windows : venv\Scripts\activate
   ```

2. Installez les dépendances :

   ```bash
   pip install -r requirements.txt
   ```

3. Configurez vos variables d'environnement dans un fichier `.env`, notamment `SECRET_KEY` et `ALGORITHM` pour JWT.

4. Lancez le serveur FastAPI :

   ```bash
   uvicorn main:app --reload
   ```

Le backend sera alors accessible sur `http://localhost:8000`.

## API Principaux Endpoints

- `POST /signup` : Inscription d’un nouvel utilisateur.
- `POST /login` : Authentification et obtention du token JWT.
- `POST /Prediction` : Envoi de texte pour prédiction (JWT requis).
- `GET /Prediction/{id}` : Récupération des dernières prédictions d’un utilisateur (JWT requis).

---

Pour plus de détails, consultez les fichiers sources et les schémas présents dans le dossier `Schemas`.
