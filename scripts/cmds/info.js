const { getStreamFromURL } = require("fb-watchman");
module.exports = {
  config: {
    name: "info",
    version: 2.0,
    author: "OtinXSandip",
    longDescription: "info about bot and owner",
    category: "ai",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const imgURL = "https://i.imgur.com/sSDSotn.mp4";
    const attachment = await global.utils.getStreamFromURL(imgURL);

    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;

    const ment = [{ id: id, tag: name }];
    const a = "Yvette 🕊🤍";
    const b = " + ";
    const c = "Alwaysone";
const e = "Male";
    const d = "m.me/100093016749575";
const f = "https://www.instagram.com/alwaysonexyz?igsh=MXFweHdjb2trZjh1eQ==";
const g = "Alwaysone X Yvette 🎀";

    message.reply({ 
      body: `${name}, here is the information 🌝
🌸 Bot's Name: ${a}
🌸 Bot's prefix: ${b}  
🌸 Owner: ${c}
🌸 Gender: ${e}
🌸 Messenger: ${d}
🌸 Insta: ${f}
🌸 Relationship: ${g}`,
mentions: ment,
      attachment: attachment });
  }
};
