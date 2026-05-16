import 'dotenv/config';

const requiredEnvironmentVariables = ['DISCORD_TOKEN', 'DISCORD_CLIENT_ID'];

export function getConfig() {
  const missing = requiredEnvironmentVariables.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}`);
  }

  return {
    token: process.env.DISCORD_TOKEN,
    clientId: process.env.DISCORD_CLIENT_ID,
    guildId: process.env.DISCORD_GUILD_ID || null,
  };
}
