import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿  👾', body: '꧁⃢⃟҉🇪🇨𝘿.𝙀.𝙎.𝙉_𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝟭𝟳༒⃢☠️꧂', sourceUrl: `https://github.com/Saldarriaga184/KanakiBot-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
