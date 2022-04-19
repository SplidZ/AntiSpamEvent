<h1 align="center">🐲 AntiSpam Event 🐲</h1>

Un anti spam simple pour discord.js

💼 • Prérequis :
- Node v16 ou plus
- Discord.js V13.6.0 ou plus
- module [discord-chat-filter](https://www.npmjs.com/package/discord-chat-filter?msclkid=51e106d6bfe911eca75e168c7eecb235)

💼 • Setup :
- warnCountLimit : Quantité de messages envoyés à la suite qui provoqueront un avertissement.
- muteCountLimit : Nombre de messages envoyés à la suite qui entraîneront un mute.
- kickCountLimit : Nombre de messages envoyés à la suite qui provoqueront un kick.
- banCountLimit : Nombre de messages envoyés à la suite qui entraîneront un bannissement.
- maxInterval : Durée (en millisecondes) pendant laquelle les messages sont considérés comme du spam.
- warnMessage : Message à envoyer dans le chat lorsqu'un utilisateur est averti.
- kickMessage : Message à envoyer dans le chat lorsqu'un utilisateur est expulsé.
- muteMessage : Message à envoyer dans le chat lorsqu'un utilisateur est mute.
- banMessage : Message à envoyer dans le chat lorsqu'un utilisateur est banni.
- ignoredPermissions : Permission d'ignorance du système.
- ignoredMembers : Utilisateur(s) ignoré(s)
- removeMessages : Supprimer les messages considérés comme spams.
- modLogsEnabled : Activation ou désactivation du système de logs.
- modLogsChannelName : Salon de logs.

💼 • Autre :
- Documentation [discord-chat-filter](https://www.npmjs.com/package/discord-chat-filter?msclkid=51e106d6bfe911eca75e168c7eecb235)
