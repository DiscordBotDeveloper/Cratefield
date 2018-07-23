const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log("Bot started. Use !help for a list of commands."); // gonna keep this
    bot.user.setGame('Glitching...');
});

client.on('message', msg => {
    if (msg.content == '!order') {
        msg.reply('What kind of order are you looking to make? Please choose from **plan** or **custom** order.');
    }
});

client.on('message', msg => {
    if (msg.content == '!order custom') {
        msg.reply('Please look at #request-a-custom-server.'); // Again, send in DMs
    }
});

client.on('message', msg => {
    if (msg.content == '!order plan') {
        msg.reply('Please look at http://goo.gl/forms/oM3Y62VPhZOwYLTq2.');
    }
});

client.on('message', msg => {
    if (msg.content == '!help') {
        msg.reply('Here is a list of commands.\n**!order** - Order a server');
    }
});
