# Nebula Crafter Discord Bot

A small Discord slash-command bot for the Nebula Crafter community.

## Features

- `/ping` confirms the bot is online and reports latency.
- `/help` lists available commands.
- `/status` reports the logged-in bot user and process uptime.
- Safe environment-based configuration through `.env`.
- Separate command registration script for guild or global slash commands.

## Requirements

- Node.js 20 or newer
- A Discord application with a bot token

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment example and fill in the values:

   ```bash
   cp .env.example .env
   ```

   Required values:

   - `DISCORD_TOKEN`: Bot token from the Discord Developer Portal.
   - `DISCORD_CLIENT_ID`: Application/client ID from the Discord Developer Portal.
   - `DISCORD_GUILD_ID`: Optional test server ID. Use this while developing for near-instant command updates.

3. Register slash commands:

   ```bash
   npm run deploy:commands
   ```

4. Start the bot:

   ```bash
   npm start
   ```

## Invite URL permissions

In the Discord Developer Portal, generate an invite URL with these scopes:

- `bot`
- `applications.commands`

For this starter bot, no privileged gateway intents are required.

## Validation

Run a syntax check with:

```bash
npm run check
```
