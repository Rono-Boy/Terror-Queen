let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. where is the id?\n\nexample:\n${usedPrefix + command} 19068263825`
  let res = await fetch(global.API('xteam', '/search/freefire', { id: args[0] }, 'APIKEY'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.result.name)
}
handler.help = ['epep'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^(freefire|epep)$/i

module.exports = handler
