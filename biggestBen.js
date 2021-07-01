const Discord = require('discord.js')
const event = require('./event.js')
const client = new Discord.Client()
const dotenv = require('dotenv')
let counter = 0


dotenv.config()
// let hours = today.getHours()
// hours = hours % 12;
// hours = hours ? hours : 12;

client.login(process.env.BIGGEST_BEN_TOKEN)
client.on('ready', () => { 
    console.log(`logged in as ${client.user.tag}!`)
})

client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});

async function joinServerAndBong(){ 
    try{ 
        client.on(event.name, (channel) => event.execute(channel))
    } catch (err){ 
        console.log(err)
    }
    
}

function getMinutes(){ 
    const today = new Date()
    const minutes = today.getMinutes()
    
    console.log(minutes)
    console.log(counter)
    const channel = client.channels.cache.get("576971995774713884")

    if(minutes === 0){ 
        if(counter === 0){ 
            client.emit(event.name, channel)
            counter ++
        }
    }
    if(minutes === 1){
        counter = 0
    }
    
    setTimeout(() => { 
    
        getMinutes()
    }, 20000)
}

getMinutes()
joinServerAndBong()
    
   








