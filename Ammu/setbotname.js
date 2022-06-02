// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `where's the text man?`
  try {
    await conn.updateProfileName(text)
    m.reply('Succeed!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <txt>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
