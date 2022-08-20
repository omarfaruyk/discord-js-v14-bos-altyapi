module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`${client.user.tag} Hazırlandı`)

        setInterval(function () {
            client.user.setActivity(`/yardım | ${client.guilds.cache.size} Sunucu`)
        }, 30000)
    }
}