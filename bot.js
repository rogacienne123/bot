const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();
const token = 'MTA5MjY3NjM0NDM1NTI0MjAwNA.Gi9pqu.yB2RU4cDjwc7zpzGY1_84EUxoBVatGOSrx584Q';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '/chat') {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const json = await response.json();
    const image = json.image;
    
    const embed = new Discord.MessageEmbed()
      .setTitle('Un chat mignon pour toi!')
      .setImage(image)
      .setColor('#FF69B4');
      
    message.channel.send(embed);
  }
});

client.login(token);
