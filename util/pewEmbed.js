const { EmbedBuilder } = require("discord.js");

module.exports = class PewEmbed {
    constructor({ author, avatarURL, description, image, thumbnail, footer, link, fields, title, color }) {
        this.author = author;
        this.avatarURL = avatarURL;
        this.description = description;
        this.image = image;
        this.thumbnail = thumbnail;
        this.footer = footer;
        this.link = link;
        this.fields = fields;
        this.title = title;
        this.color = color;
    }

    get embed() {
        const embed = new EmbedBuilder()
            .setAuthor({ name: this.author, iconURL: this.avatarURL })
            .setColor(this.color ?? 0x2f3136)
            .setDescription(this.description)
            .setFooter(this.footer ?? {
                text: "Pew", iconURL: "https://avatars.githubusercontent.com/u/55335712?v=4"
            })
            .setTimestamp()
            .setFields(this.fields ?? []);

        this.image ? embed.setImage(this.image) : null;
        this.title ? embed.setTitle(this.title) : null;
        this.thumbnail ? embed.setThumbnail(this.thumbnail) : null;
        return embed;
    }
}