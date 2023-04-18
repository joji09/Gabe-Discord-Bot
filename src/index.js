require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

// prefix
const prefix = "!";

// Check Intents List for UserID //
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

// Discord User ID goes here //
const userID = '#######' 

const responses = [
'MEH...meh..meh',
'Bigger number, better person',
'BUH',
];

    client.on('message', message => {
    if (message.author.bot) return;
 
    if (message.author.id === userID) {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        message.reply(randomResponse);
    }
 });

 
// replies to specific word
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'gabe') {
        message.reply('BUH');
    }
});


// math command tbd if worth keeping
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number')?.value;
        const num2 = interaction.options.get('second-number')?.value;
        
        interaction.reply(`The sum is ${num1 + num2}`)
    }
});

client.login(process.env.TOKEN);