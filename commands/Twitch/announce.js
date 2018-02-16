const Twitch = require('../../structures/Twitch.js');

class Announce extends Twitch {
  constructor(client) {
    super(client, {
      name: 'announce',
      description: 'Announces a stream.',
      usage: '<aria|azreal|felics|lady> <title> <description>',
      guildOnly: true,
      aliases: ['stream', 'twitch'],
      extended: 'Announce your stream with this command. Requires the title of your stream and a description of it.',
      botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
    });
  }

  async run(message, [rawTitle, ...rawDescription], level) {
    const { prefix, streamChannel } = this.client.settings.get(message.guild.id);
    if (!message.flags.length) return message.channel.send(`The proper usage of this command is \`${prefix}${this.help.name} ${this.help.usage}\``);

    switch (message.flags[0]) {
      case 'aria': {
        const role = 'aria\'s Stream';
        const title = rawTitle.split('_').join(' ');
        const description = rawDescription.join(' ');
        const streamURL = 'https://www.twitch.tv/aria_streams';
        await this.streamEmbed(this.client, message, title, description, streamURL);
        const channel = message.guild.channels.find('name', streamChannel);
        const streamRole = await message.guild.roles.find('name', `${role}`);
        if (streamRole.mentionable === false) await streamRole.edit({ mentionable: true });
        await channel.send(`${streamRole}`);
        await streamRole.edit({ mentionable: false });
        break;
      }

      case 'felics': {
        const role = 'Felic\'s Stream';
        const title = rawTitle.split('_').join(' ');
        const description = rawDescription.join(' ');
        const streamURL = 'https://www.twitch.tv/felixinfintum';
        await this.streamEmbed(this.client, message, title, description, streamURL);
        const channel = message.guild.channels.find('name', streamChannel);
        const streamRole = await message.guild.roles.find('name', `${role}`);
        if (streamRole.mentionable === false) await streamRole.edit({ mentionable: true });
        await channel.send(`${streamRole}`);
        await streamRole.edit({ mentionable: false });
        break;
      }

      case 'lady': {
        const role = 'Lady\'s Stream'; 
        const title = rawTitle.split('_').join(' ');
        const description = rawDescription.join(' ');
        const streamURL = 'https://www.twitch.tv/ladylish';
        await this.streamEmbed(this.client, message, title, description, streamURL);
        const channel = message.guild.channels.find('name', streamChannel);
        const streamRole = await message.guild.roles.find('name', `${role}`);
        if (streamRole.mentionable === false) await streamRole.edit({ mentionable: true });
        await channel.send(`${streamRole}`);
        await streamRole.edit({ mentionable: false });
        break;
      }

      case 'azreal': {
        const role = 'Azrael\'s Stream';
        const title = rawTitle.split('_').join(' ');
        const description = rawDescription.join(' ');
        const streamURL = 'https://www.twitch.tv/azraelazzy';
        await this.streamEmbed(this.client, message, title, description, streamURL);
        const channel = message.guild.channels.find('name', streamChannel);
        const streamRole = await message.guild.roles.find('name', `${role}`);
        if (streamRole.mentionable === false) await streamRole.edit({ mentionable: true });
        await channel.send(`${streamRole}`);
        await streamRole.edit({ mentionable: false });
      }
    }
  }
}

module.exports = Announce;