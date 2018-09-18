const botconfig = require("./botconfig.json");
const tokenfile = process.env.TokenPoGo;
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  //bot.user.setGame("Pokemon Go!")
  bot.user.setActivity("Pokemon Go!")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

//Server Information
  if (cmd === `${prefix}report`){

    //Report and this is the reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.memeber.get(args[0]));
    //if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

      let reportschannel = message.guild.channels.find(`name`, "reports-from-users");
      //if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
      //if(!reportchannel) return message.channel.send("Couldn't find reports channel.");

      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

    return;
  }
  if (cmd === `${prefix}Report`){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.memeber.get(args[0]));
    //if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

      let reportschannel = message.guild.channels.find(`name`, "reports-from-users");
      //if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
      //if(!reportchannel) return message.channel.send("Couldn't find reports channel.");

      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

    return;
  }
  //Server Info + Bot
  if(cmd === `${prefix}serverinfo`){
      let sicon = message.guild.displayAvatarURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinAt)
      .addField("Total Members", message.guild.memberCount);
      return message.channel.send(serverembed);
  }
  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("PoGo Western Cape", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

//Weather commands
  if(cmd === `${prefix}Help`){
    return message.channel.send("Use !! and weather type to see what pokemon are boosted.");
  }
  if(cmd === `${prefix}Sunny`){
    return message.channel.send("Grass, Fire and Ground moves are boosted");
  }
  if(cmd === `${prefix}sunny`){
      return message.channel.send("Grass, Fire and Ground moves are boosted");
    }
  if(cmd === `${prefix}Partly Cloudy`){
    return message.channel.send("Normal and Rock moves are boosted");
  }
  if(cmd === `${prefix}partly cloudy`){
    return message.channel.send("Normal and Rock moves are boosted");
  }
  if(cmd === `${prefix}Rainy`){
    return message.channel.send("Water, Electric and Bug moves are boosted ");
  }
  if(cmd === `${prefix}rainy`){
    return message.channel.send("Water, Electric and Bug moves are boosted ");
  }
  if(cmd === `${prefix}Cloudy`){
    return message.channel.send("Fairy, Fighting and Poison moves are boosted");
  }
  if(cmd === `${prefix}cloudy`){
    return message.channel.send("Fairy, Fighting and Poison moves are boosted");
  }
  if(cmd === `${prefix}Windy`){
    return message.channel.send("Flying, Dragon and Psychic moves are boosted");
  }
  if(cmd === `${prefix}windy`){
    return message.channel.send("Flying, Dragon and Psychic moves are boosted");
  }
  if(cmd === `${prefix}Snow`){
    return message.channel.send("Ice and Steel moves are boosted");
  }
  if(cmd === `${prefix}snow`){
    return message.channel.send("Ice and Steel moves are boosted");
  }
  if(cmd === `${prefix}snowy`){
    return message.channel.send("Ice and Steel moves are boosted");
  }
  if(cmd === `${prefix}Fog`){
    return message.channel.send("Dark and Ghost moves are boosted");
  }
  if(cmd === `${prefix}fog`){
    return message.channel.send("Ice and Steel moves are boosted");
  }
});

bot.login(botconfig.token);