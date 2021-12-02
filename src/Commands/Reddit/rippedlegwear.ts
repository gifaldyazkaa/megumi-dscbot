//@ts-nocheck
import { Command } from '../../interfaces';
import { Client } from 'cabul';
const reddit = new Client();

export const command: Command = {
	name: 'rippedlegwear',
	description: 'Dedicated to Ripped anime legwear',
	aliases: ['rlw'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'ADD_REACTIONS'],
	run: async (client, message, args) => {
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply('Not an NSFW Channel!');
		reddit
			.rippedlegwear()
			.then((rlist) => {
				const img = rlist.data.url_overridden_by_dest;

				message.channel.send({ content: img }).then((msg) => {
					msg.react('👍');
					msg.react('👎');
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
};