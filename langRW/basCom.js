/////////////////////////////////////////////////////////////////
//  Title:        basCom.js                                    //
//  Author:       Jake Roberts                                 //
//  Created Date: 4/24/2019                                    //
//  Updated:      6/4/2019                                     //
//  Description:  Checks messages passed in for non-moderation //
//  		  commands                                             //
//  Dependencies: None                                         //
/////////////////////////////////////////////////////////////////

const DISCORD = require('discord.js');      //for Discord library
const CLIENT = new DISCORD.Client();        //for Discord client
const EMBED = new DISCORD.RichEmbed();      //for Discord embeds
const FS = require('fs');                   //for filestream


/********************************************************************************
 * "Basic Command (basCom) Function"                                            *
 * Checks messages for basic commands                                           *
 * The message, inviteURL, and MSGINFO variables are passed into this async     *
 *  function. This function runs only if the previous conditionals aren't met.  *
 ********************************************************************************/
exports.basCom = async function(msg, inviteURL, MSGINFO) {
  // Check message contents for basic commands
    if (msg.content.startsWith('!ping')) {
      const PING = await msg.channel.send("Ping?");
      PING.edit(`Pong! **${PING.createdTimestamp - msg.createdTimestamp}ms**`);

	    console.log(MSGINFO);
	    return;
    }

    if(msg.content.startsWith("!avatar")) {
      msg.reply(msg.author.avatarURL);
      console.log(MSGINFO);
	    return;
    }

    if(msg.content.startsWith("!invite")) {
      msg.channel.createInvite().catch(console.error);
      //console.log(inviteURL.invite.find(invite => invite.code));

      EMBED
        .setTitle("Invite!")
        .setAuthor(msg.author.tag, msg.author.avatarURL)
        .setColor("#008de5")
        .setDescription(`Invite Link --> ${getInvite(msg)}`)
        .setFooter(`User ID: ${msg.author.id}`, msg.author.avatarURL)
        .setTimestamp()
        .addField("Expiration", "Expires: Never")
        .addField("Current Uses", )

      msg.channel.send({EMBED});
	    console.log(MSGINFO);
	    return;
    }

  if(msg.content.startsWith("!help")) {
		console.log(MSGINFO);
		return;
	}

  if(msg.content.startsWith("!readme")) {

    let readme = "";

    readme = FS.open('README.md', 'r', (err, data) => {
      if (err) { throw err; console.log(MSGINFO + `\tREADME.md could not be opened`); }

      let temp;

      temp = FS.readFile('README.md', 'utf-8', (err, data) => {
        if(err) throw err;
        return data;
      });

      return temp;
    });

    msg.channel.send(readme);

    console.log(MSGINFO);
		return;
	}

  if(msg.content.startsWith("!pseudo")) {
		console.log(MSGINFO);
		return;
	}

  if(msg.content.startsWith("!info")) {
		console.log(MSGINFO);
		return;
	}

  if(msg.content.startsWith("!serverinfo")) {
		EMBED
			.setTitle("Server Information")
			.setAuthor(msg.author.tag, msg.author.avatarURL)
			.setColor("#008de5")
			.setDescription(`${msg.guild.name} Server Information`)
			.setFooter(`User ID: ${msg.author.id}`, msg.author.avatarURL)
			.setTimestamp()
			.addField("Server Name:", msg.guild.name)
			.addField("Server Created:", msg.guild.createdAt)
			.addField("Owner:", msg.guild.owner)
			.addField("# of Members", msg.guild.memberCount)
			.addField("# of Roles", msg.guild.roles.last().position+1)
      .addField("# of Categories", numCats(msg))
			.addField("# of Text Channels", numTextChans(msg))
      .addField("# of Voice Channels", numVoIPChans(msg))
			.addField("Region:", msg.guild.region)
		msg.channel.send({EMBED});

		console.log(MSGINFO);
		return;
	}
}

const numTextChans = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'text').size;
}

const numVoIPChans = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'voice').size;
}

const numCats = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'category').size;
}

const getInvite = (msg) => {
  const VARI = msg.guild.fetchInvites();
  console.log(VARI.props);
  //return msg.guild.fetchInvites().then(invites => invites.find(invite => invite.inviter.id === '545020934868828180').code).catch(console.error);
}
