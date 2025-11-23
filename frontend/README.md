# Projet Frontend SentimentApp

### Technologies Utilisées
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square) ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white&style=flat-square) ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)

## Démarrage

Lancez d'abord le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `app/page.tsx`. La page se met à jour automatiquement à chaque modification.

Ce projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour optimiser et charger automatiquement la police [Geist](https://vercel.com/font) de Vercel.

## En savoir plus

Pour en apprendre plus sur Next.js, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) - pour apprendre les fonctionnalités et l’API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - un tutoriel interactif.

Vous pouvez également visiter [le dépôt GitHub de Next.js](https://github.com/vercel/next.js) - vos retours et contributions sont les bienvenus !

## Déployer sur Vercel

La façon la plus simple de déployer votre application Next.js est d’utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) des créateurs de Next.js.

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## Utilisation avec Docker

Vous pouvez construire et lancer le frontend dans un conteneur Docker.

### Prérequis

- Installer [Docker](https://www.docker.com/get-started)

### Construire l'image et lancer le conteneur

Depuis le répertoire racine ou frontend, exécutez :

```bash
docker build -t sentimentapp-frontend -f frontend/Dockerfile .
docker run -d -p 3000:3000 --name sentiment-frontend sentimentapp-frontend
```

Le frontend sera accessible sur http://localhost:3000.

### Arrêter et supprimer le conteneur

```bash
docker stop sentiment-frontend
docker rm sentiment-frontend
```
docker rm sentiment-frontend
docker run -d -p 3000:3000 --name sentiment-frontend sentimentapp-frontend
