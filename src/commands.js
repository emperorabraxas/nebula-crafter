import { SlashCommandBuilder } from 'discord.js';

export const commands = [
  {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Check whether Nebula Crafter is online.'),
    async execute(interaction) {
      const latency = Date.now() - interaction.createdTimestamp;
      await interaction.reply(`Pong! Bot latency is ${latency}ms.`);
    },
  },
  {
    data: new SlashCommandBuilder()
      .setName('help')
      .setDescription('Show available Nebula Crafter bot commands.'),
    async execute(interaction) {
      await interaction.reply({
        ephemeral: true,
        content: [
          '**Nebula Crafter commands**',
          '`/ping` - Check whether the bot is online.',
          '`/help` - Show this help message.',
          '`/status` - Show bot runtime details.',
        ].join('\n'),
      });
    },
  },
  {
    data: new SlashCommandBuilder()
      .setName('status')
      .setDescription('Show Nebula Crafter runtime status.'),
    async execute(interaction) {
      const uptimeSeconds = Math.round(process.uptime());
      await interaction.reply({
        ephemeral: true,
        content: `Online as ${interaction.client.user.tag}. Uptime: ${uptimeSeconds}s.`,
      });
    },
  },
];

export const commandMap = new Map(commands.map((command) => [command.data.name, command]));
export const commandJson = commands.map((command) => command.data.toJSON());
