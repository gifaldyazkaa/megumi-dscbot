import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
	name: 'kitsune',
	description: 'Random Kitsune NSFW!',
	aliases: [],
	usage: '',
	testOnly: true,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		const kitsune = await Lewd.nekobot('kitsune');
		message.channel.send({ content: kitsune.message });
	},
};
