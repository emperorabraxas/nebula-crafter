import { Client, Events, GatewayIntentBits } from 'discord.js';
import { commandMap } from './commands.js';
import { getConfig } from './config.js';

const { token } = getConfig();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Nebula Crafter is online as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commandMap.get(interaction.commandName);
  if (!command) {
    await interaction.reply({ ephemeral: true, content: 'Unknown command.' });
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Command /${interaction.commandName} failed:`, error);
    const response = { ephemeral: true, content: 'Sorry, that command failed.' };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(response);
    } else {
      await interaction.reply(response);
    }
  }
});

process.on('SIGINT', async () => {
  console.log('Shutting down Nebula Crafter...');
  await client.destroy();
  process.exit(0);
});

await client.login(token);
