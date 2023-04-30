import { Client, IntentsBitField, Partials } from "discord.js";
import path from "path";
import WOK, { DefaultCommands } from "wokcommands";
require("dotenv/config");

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.DirectMessages,
		IntentsBitField.Flags.MessageContent,
	],
	partials: [Partials.Channel],
});

client.on("ready", () => {
	new WOK({
		// The client for your bot. This is the only required property
		client,
		// Path to your commands folder
		commandsDir: path.join(__dirname, "commands"),
		// Path to your features folder
		featuresDir: path.join(__dirname, "features"),
		// Configure your event handlers
		events: {
			// Where your events are located. This is required if you
			// provide this events object
			dir: path.join(__dirname, "events"),
			// To learn how to properly configure your events please see
			// https://docs.wornoffkeys.com/events/what-is-a-feature
		},
		// Your MongoDB connection URI
		mongoUri: process.env.MONGO_URI || "",
		// What server IDs are for testing. This is where test
		// only commands are registered to
		testServers: ["1099422299037380640"],
		// User IDs who are bot owners/developers. These users
		// can access owner only commands
		botOwners: ["831969094797361193"],
		// Don't want some of the default commands? Add them here
		disabledDefaultCommands: [
			DefaultCommands.ChannelCommand,
			DefaultCommands.CustomCommand,
			DefaultCommands.Prefix,
			DefaultCommands.RequiredPermissions,
			DefaultCommands.RequiredRoles,
			DefaultCommands.ToggleCommand,
		],
		// Configure the cooldowns for your commands and features
		cooldownConfig: {
			errorMessage: "Please wait {TIME} before doing that again.",
			botOwnersBypass: false,
			// The amount of seconds required for a cooldown to be
			// persistent via MongoDB.
			dbRequired: 300,
		},
		// Dynamic validations
		validations: {
			// Syntax based validations: Ran per command whenever
			// the bot starts up. Useful to throw errors if the
			// syntax of a command is not correct.
			syntax: path.join(__dirname, "validations", "syntax"),
			// Runtime based validations: Ran per command whenever
			// that command is ran. Should return true or false
			// depending on if the command should be ran or not.
			runtime: path.join(__dirname, "validations", "runtime"),
			// For more information on how to configure dyanmic validations
			// please see: TODO: add link
		},
	});
});

client.login(process.env.TOKEN);
