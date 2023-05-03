import { CommandObject, CommandType } from "wokcommands";

export default {
	description: "Testing command",
	type: CommandType.SLASH,
	testOnly: true,

	callback: () => {
		return {
			content: "tested!",
		};
	},
} as CommandObject;
