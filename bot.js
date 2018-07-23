const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    client.user.setGame('DO NOT USE'); // This doesn't work
});

client.on('message', msg => {
    if (msg.content == ';order') {
        order = true;
        msg.reply('What kind of order are you looking to make? Please choose from **plan** or **custom** order.');
        return;
    }
    else if (msg.content == 'plan') {
        if (order == true) {
            message.author.sendMessage("Please look at http://goo.gl/forms/oM3Y62VPhZOwYLTq2 to request a server plan.");
            order = false;
            return;
        }
        else {
            order = false; // This happens if another person says something before you can write plan or custom so, i can keep it or remove it, but i will keep it because they can exit the ;order by saying something unrelated to an option
            return;
        }
    }
    else if (msg.content == 'custom') {
        if (order == true) {
            msg.reply('Please look at #request-a-custom-server.'); // This won't send in dms.
            order = false;
            return;
        }
        else {
            order = false; // Maybe don't have this? idk
            return;
        }
    }
    else if (msg.content == ';order custom') {
        msg.reply('Please look at #request-a-custom-server');
        return;
    }
    else if (msg.content == ';order plan') {
        message.author.sendMessage("Please look at http://goo.gl/forms/oM3Y62VPhZOwYLTq2 to request a server plan.");
        return;
    }
    else if (msg.content == ';help') {
        msg.reply('Here is a list of commands.\n**;help** - View commands\n**;order** - Order a server');
        return;
    }
    else if (msg.content == ';dailymeme') { // not working?
        msg.reply('Daily Meme Time! https://cdn.discordapp.com/attachments/471018880525926410/471018938302595092/635a5ef2e71e45cbb536b0633baa2bb711147d089b651e4922eb89a79ae1eaf6_1.jpg')
        return;
    }
});
