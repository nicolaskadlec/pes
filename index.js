const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const stupidAssBot = new CommandClient(
        `Bot ${token}`, 
        {
            intents: ['guilds'],
            maxShards: 'auto',
            restMode: true,
        }
    )

    // Register the stupid ass command
    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'lol',
            description: 'I hate discord so much you cannot believe it',
            type: 1,
        }])
    })
    // Stupid ass interaction creation event
    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don\'t care what humans think is impossible.'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })

    
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
