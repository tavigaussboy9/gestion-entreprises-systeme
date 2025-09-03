const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Système de Gestion d'Entreprises!');
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
