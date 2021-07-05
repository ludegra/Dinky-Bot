import { Client, MessageEmbed } from "discord.js";

const dinky = process.env.DINKY as string;

const client = new Client();

client.once("ready", () => {
    console.log("ready");
});

client.on("guildCreate", (guild) => {
    if (guild.member(dinky)) {
        console.log(`Joined ${guild.name} and Dinky is here`);
    }
});

client.on("message", (message) => {
    if (message.content.toLocaleLowerCase().includes("komsi komsi dinky")) {
        client.users.fetch(dinky).then((user) => {
            let embed = new MessageEmbed()
                .setColor(message.member?.roles.color?.color.toString(16) as string)
                .setAuthor(message.author.tag, message.author.avatarURL() as string)
                .setDescription(`${message.content}\n\n[link](${message.url})`)
                .setTimestamp();
            user.send("You have been summoned!", embed);
        });
    }
})

client.login();