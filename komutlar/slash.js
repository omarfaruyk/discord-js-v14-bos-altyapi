const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,                                //true Değeri Komutun Slash Olduğunu Gösteriyor
    yetki: 'ManageMessages',                    //Kullanıcının Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    botyetki: 'ManageMessages',                 //Botun Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    cooldown: 10,                               //Komutun CoolDown Süresini(Saniye) Gösteriyor

    data: new SlashCommandBuilder()             //Slash Komut Oluşturma Alanı
    .setName('test')
    .setDescription('Test Komutu')
    .addStringOption(option =>
        option
            .setName('seçenek')
            .setDescription('Seçenek açıklaması')
            .setRequired(true)
    ),
    async execute(client, interaction) {        //Komut Handlerına Göre Tanımlama Yeri. Burayı Ellemeyin
        
        await interaction.reply('Test Başarılı')

    
    }
}