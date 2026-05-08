# CV — Guide de mise à jour

Ce projet génère un CV web statique à partir d'un fichier `resume.json`. Toute modification du JSON est automatiquement reflétée sur le site après un push.

---

## 1. Modifier le contenu du CV

Ouvrir le fichier `resume.json` à la racine du projet et éditer les sections selon le besoin.

### Structure du fichier

```
resume.json
├── personal        → nom, titre, localisation, email, liens sociaux
├── experience      → postes occupés, entreprises, projets, stacks
├── skills          → compétences développement et autres
└── portfolio       → projets personnels avec description et liens
```

### Exemple : modifier le titre du poste actuel

```json
"personal": {
  "name": "{prenom} {nom}",
  "title": "Lead Développeur",   ← modifier ici
  ...
}
```

### Exemple : ajouter une expérience

```json
{
  "period": "2024 - aujourd'hui",
  "title": "Nouveau poste",
  "company": "Nom de l'entreprise",
  "location": "Ville",
  "projects": [
    {
      "description": "Description du projet.",
      "stack": ["Tech1", "Tech2"]
    }
  ]
}
```

### Exemple : ajouter un projet portfolio

```json
{
  "name": "Nom du projet",
  "description": "Description courte.",
  "url": "https://lien-du-projet.com"
}
```

> Pour plusieurs liens, utiliser `"urls": ["https://...", "https://..."]` à la place de `"url"`.

---

## 2. Prévisualiser en local (optionnel)

Avant de publier, vérifier le rendu dans le navigateur :

```bash
npm run dev
```

Le site est accessible sur [http://localhost:4321](http://localhost:4321). Les modifications du JSON sont prises en compte à chaud.

---

## 3. Publier sur GitHub Pages

Une fois les modifications prêtes :

```bash
# Vérifier les fichiers modifiés
git status

# Ajouter les changements
git add resume.json

# Créer un commit
git commit -m "Mise à jour du site"

# Pousser vers GitHub
git push
```

Le déploiement se déclenche automatiquement. Le site est mis à jour en moins d'une minute sur :

**https://{user}.github.io**

---

## Suivi du déploiement

L'avancement du déploiement est visible dans l'onglet **Actions** du dépôt GitHub. Un cercle vert indique que le déploiement est terminé.
