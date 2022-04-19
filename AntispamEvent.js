const client = require("../index");

const { SpamFilter } = require("discord-chat-filter");

const spamFilter = new SpamFilter({
  warnCountLimit: 3, 
  muteCountLimit: 4, 
  kickCountLimit: 7, 
  banCountLimit: 7, 
  maxInterval: 2000, 
  warnMessage: "**Le spam est interdit {@user}.**",
  kickMessage: "**{user_tag} a été expulsé pour spam.**",
  muteMessage: "**{user_tag} vient d'être mute pour spam.**",
  banMessage: "**{user_tag} a été banni pour spam.**",
  ignoredPermissions: ["ADMINISTRATOR"],
  ignoredMembers: [],
  removeMessages: true,
  modLogsEnabled: true,
  modLogsChannelName: "Id",
});

client.on("messageCreate", async (message) => {
  spamFilter.init(message)
});
