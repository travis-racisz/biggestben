module.exports = { 
    name: "time", 
    description: "checks the time for being the top of the hour", 
    execute(channel){ 
        channel.join().then(connection => { 
            const dispatcher = connection.play('hourlychimebeg.mp3')
            dispatcher.on("finish", () => { 
                dispatcher.destroy()
                channel.leave()
            })
        })
        .catch(err => console.log(err))
    }
}