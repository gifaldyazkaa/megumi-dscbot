import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
	name: 'lewdneko',
	description: 'Random NSFW Neko!',
	aliases: ['lewdnk'],
	usage: '',
	testOnly: true,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		const neko = await Lewd.waifupics('neko');
		message.channel.send({ content: neko.url });
	},
};
