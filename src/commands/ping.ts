import { CommandObject, CommandType } from "wokcommands";

export default {
	description: "Ping pong command",
	type: CommandType.SLASH,
	testOnly: true,

	callback: () => {
		return {
			content: "Pong!",
		};
	},
} as CommandObject;
