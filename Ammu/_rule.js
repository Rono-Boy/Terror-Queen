let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `â ã Rules ã
â ð Supervision by the owner
â â Please comply
â 
â Regulations can be at any time
âchanged for convenience
âââââ
1. Please don't spam bot commands
2. Don't send virtex, bug, trojan, etc to bot number
3. Insulting the owner will be picked up directly at their respective homes
4. The bot/owner is not responsible for what the user does to the command bot
5. Don't call / vc to bot numbers
6. EXP/Limit/Level cheats are prohibited
7. If the bot doesn't respond, it means it's off/fixed a bug
8. Please report any bugs via *!report*


 ã Consequences ã
1. If you violate rule number 5 (calling / vc) you will be blocked
2. If you violate the rules number 1, 2, 3 then you can get banned from bots
4. If you violate rule number 3 (insulting) then you will be picked up at your respective homes
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://i.imgur.com/P0qyv4Q.jpeg")).buffer(), KING AS, 'Â© êª¶Í¢á´ÉªÉ´É¢ á´sê«â©', 'á´á´É´á´', '.? menu', 'á´á´¡É´á´Ê', ',owner' )
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(rule)$/i
module.exports = handler
