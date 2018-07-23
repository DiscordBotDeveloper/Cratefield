const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log("Bot started. Use !help for a list of commands.");
});

client.on('message', msg => {
    if (msg.content == '!order') {
        msg.reply('What kind of order are you looking to make? Please choose from **plan** or **custom** order.')
        client.on('message', msg=> {
            if (msg.content == 'plan') {
                msg.reply('Please look at #request-a-server')
            }
            else if (msg.content == 'custom') {
                msg.reply('Please look at https://goo.gl/forms/oM3Y62VPhZOwYLTq2.')
            }
            else {
                
            }
        });
    }
});

client.on('message', msg => {
    if (msg.content == '!help') {
        msg.reply('Here is a list of commands.\n')
    }
});

// client.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.find('name', 'welcome');
//     if (!channel) return;
//     channel.send(`Welcome to the server, ${member}`);
// });

// Admin thing
client.on('typingStart', (channel, user) => {
    console.log(`${user.username} is typing in ${channel.name}`);
});