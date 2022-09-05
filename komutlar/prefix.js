const Discord = require('discord.js')

module.exports = {
    slash: false,                                   //false Değeri Komutun Prefixli Olduğunu Gösteriyor
    name: ['test', 'test1'],                        //Komut İsmini Belirtiyor
    yetki: 'ManageMessages',                        //Kullanıcının Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    botyetki: 'ManageMessages',                     //Botun Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    cooldown: 10,                                   //Komutun CoolDown Süresini(Saniye) Gösteriyor

    async execute(client, message, args) {          //Komut Handlerına Göre Tanımlama Yeri. Burayı Ellemeyin

        await message.channel.send('Test Başarılı')

    }
}