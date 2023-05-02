import { CommandObject, CommandType } from "wokcommands";

export default {
	description: "Ping pong command",
	type: CommandType.slash,

	callback: () => {
		return {
			content: "Pong!",
		};
	},
} as CommandObject;
