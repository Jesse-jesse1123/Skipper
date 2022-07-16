/// //////////////////////////////////////////////////////////////
//  Title:        basCom.js                                    //
//  Author:       Jake Roberts                                 //
//  Created Date: 4/24/2019                                    //
//  Updated:      6/4/2019                                     //
//  Description:  Checks messages passed in for non-moderation //
//        commands                                             //
//  Dependencies: None                                         //
/// //////////////////////////////////////////////////////////////

const Discord = require('discord.js') // for Discord library
// const client = new Discord.Client() // for Discord client
const embed = new Discord.RichEmbed() // for Discord embeds
const fs = require('fs') // for filestream

/********************************************************************************
 * "Basic Command (basCom) Function"                                            *
 * Checks messages for basic commands                                           *
 * The message, inviteURL, and msgInfo variables are passed into this async     *
 *  function. This function runs only if the previous conditionals aren't met.  *
 ********************************************************************************/
exports.basCom = async function(msg, inviteURL, msgInfo) {
  // Check message contents for basic commands
  if (msg.content.startsWith('!ping')) {
    const ping = await msg.channel.send('Ping?')
    ping.edit(`Pong! **${ping.createdTimestamp - msg.createdTimestamp}ms**`)

    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!avatar')) {
    msg.reply(msg.author.avatarURL)
    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!invite')) {
    msg.channel.createInvite().catch(console.error)
    // console.log(inviteURL.invite.find(invite => invite.code));

    embed
      .setTitle('Invite!')
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .setColor('#008de5')
      .setDescription(`Invite Link --> ${getInvite(msg)}`)
      .setFooter(`User ID: ${msg.author.id}`, msg.author.avatarURL)
      .setTimestamp()
      .addField('Expiration', 'Expires: Never')
      .addField('Current Uses', )

    msg.channel.send({ embed })
    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!help')) {
    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!readme')) {
    let readme = ''

    readme = fs.open('README.md', 'r', (err, data) => {
      if (err) { console.log(msgInfo + '\tREADME.md could not be opened'); throw err }

      const temp = fs.readFile('README.md', 'utf-8', (err, data) => {
        if (err) throw err
        return data
      })

      return temp
    })

    msg.channel.send(readme)

    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!pseudo')) {
    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!info')) {
    console.log(msgInfo)
    return
  }

  if (msg.content.startsWith('!serverinfo')) {
    embed
      .setTitle('Server Information')
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .setColor('#008de5')
      .setDescription(`${msg.guild.name} Server Information`)
      .setFooter(`User ID: ${msg.author.id}`, msg.author.avatarURL)
      .setTimestamp()
      .addField('Server Name:', msg.guild.name)
      .addField('Server Created:', msg.guild.createdAt)
      .addField('Owner:', msg.guild.owner)
      .addField('# of Members', msg.guild.memberCount)
      .addField('# of Roles', msg.guild.roles.last().position + 1)
      .addField('# of Categories', numCats(msg))
      .addField('# of Text Channels', numTextChans(msg))
      .addField('# of Voice Channels', numVoIPChans(msg))
      .addField('Region:', msg.guild.region)
    msg.channel.send({ embed })

    console.log(msgInfo)
  }
}

const numTextChans = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'text').size
}

const numVoIPChans = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'voice').size
}

const numCats = (msg) => {
  return msg.guild.channels.filter(channels => channels.type === 'category').size
}

const getInvite = (msg) => {
  const vari = msg.guild.fetchInvites()
  console.log(vari.props)
  // return msg.guild.fetchInvites().then(invites => invites.find(invite => invite.inviter.id === '545020934868828180').code).catch(console.error);
}
