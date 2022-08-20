const commands = []
const fs = require("node:fs")
const path = require("node:path")
const { REST } = require('@discordjs/rest')
const { Collection } = require("discord.js")
const { Routes } = require('discord-api-types/v10')
const commandsPath = path.join(__dirname, "./komutlar")
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"))
const eventsPath = path.join(__dirname, "./events")
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"))
const { botid, token } = require('./ayarlar.json')

module.exports = (client) => {
  client.commands = new Collection()
  client.slashcommands = new Collection()

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = require(filePath)
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client))
    } else {
      client.on(event.name, (...args) => event.execute(...args, client))
    }
  }

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if (command.slash) {
      client.slashcommands.set(command.data.name, command)
      commands.push(command.data.toJSON())
    }
    if (!command.slash) {
      for (i = 0; i < command.name.length; i++) {
        client.commands.set(command.name[i], command)
      }
    }
  }
  console.log(`${client.slashcommands.size} Eğik Çizgi Komutu, ${client.commands.size} Ön Ekli Komut Güncellendi`)
}

const rest = new REST({ version: '10' }).setToken(token)

setTimeout(async () => {
  rest.put(Routes.applicationCommands(botid), { body: commands }).catch(console.error)
}, 500)