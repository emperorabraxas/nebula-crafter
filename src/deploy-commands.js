import { REST, Routes } from 'discord.js';
import { commandJson } from './commands.js';
import { getConfig } from './config.js';

const { token, clientId, guildId } = getConfig();
const rest = new REST({ version: '10' }).setToken(token);

const route = guildId
  ? Routes.applicationGuildCommands(clientId, guildId)
  : Routes.applicationCommands(clientId);

console.log(`Registering ${commandJson.length} slash command(s) ${guildId ? `for guild ${guildId}` : 'globally'}...`);
await rest.put(route, { body: commandJson });
console.log('Slash commands registered successfully.');
