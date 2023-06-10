import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${week}, ${date}\`\`\`
⎔ *${lenguajeGB['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
⎔ *Registrados »* ${rtotalreg}/${totalreg}
⎔ *${lenguajeGB['smsTime']()}* ➺ _${time}_    
⎔ *${lenguajeGB['smsUptime']()}* ➺ _${uptime}_ 
⎔ *${lenguajeGB['smsVersion']()}* ➺ _${vs}_
⎔ *${lenguajeGB['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
⎔ *${lenguajeGB['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
⎔ *${lenguajeGB['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_

✨ *◜INFORMACIÓN DEL USUARIO◞* ✨
✪ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
✪ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
✪ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
✪ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}

✪ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
✪ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
✪ *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
⊜ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
let str = `╭─────────────◆ 
 ┃✯༄●⃝𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙐𝙡𝙩𝙧𝙖 
 ┃✯-𝗛ᴏʟᴀ,➟${taguser} 
 ┃✯┃▢ᴏᴡɴᴇʀ:ᴏғᴄ➟D.E.S.N_OFFICIAL17  
 ┃✯│▢ғᴇᴄʜᴀ:➟${date} 
 ┃✯│▢ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime} 
 ┃✯╰▢ᴜsᴜᴀʀɪᴏs:➟${rtotalreg} 
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯🍂𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊̃𝙉 𝘿𝙀 𝙆𝘼𝙉𝙀𝙆𝙄𝘽𝙊𝙏🍂
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤.*cuentaskanekibot | cuentasgb*
 ┃✯│⿴⃟ٍࣽ➤.*gruposgb | grupos | groupgb*
 ┃✯│⿴⃟ٍࣽ➤.*donar | donate*
 ┃✯│⿴⃟ٍࣽ➤.*listagrupos | grouplist*
 ┃✯│⿴⃟ٍࣽ➤.*estado | status*
 ┃✯│⿴⃟ٍࣽ➤.*infogata | infobot*
 ┃✯│⿴⃟ٍࣽ➤.*instalarbot | installbot*
 ┃✯│⿴⃟ٍࣽ➤.*creadora | owner*
 ┃✯│⿴⃟ٍࣽ➤.velocidad | ping
 ┃✯│⿴⃟ٍࣽ➤.*Bot*
 ┃✯│⿴⃟ٍࣽ➤*términos y condiciones*
╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-💥𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽💥 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤.*serbot | jadibot*
 ┃✯│⿴⃟ٍࣽ➤.*bots | listjadibots*
 ┃✯│⿴⃟ٍࣽ➤.*detener | stop*
 ┃✯╰⿴⃟ٍࣽ➤.*bcbot*
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-🧩𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒👾-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.reporte *texto*_
 ┃✯╰⿴⃟ٍࣽ➤_.report *texto*_
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-🌴𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒🧨-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.botemporal *enlace* *cantidad*_
 ┃✯╰⿴⃟ٍࣽ➤_.addbot *enlace* *cantidad*_
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-🔍𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒🔎-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤ *.listapremium | listprem*
 ┃✯│⿴⃟ٍࣽ➤ *.pase premium*
 ┃✯╰⿴⃟ٍࣽ➤ *.pass premium*
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯🎙️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒🎚️& 
 ┃✯𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒--⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.mates | matemáticas | math_
 ┃✯│⿴⃟ٍࣽ➤_.lanzar *cara* | *cruz*
 ┃✯│⿴⃟ٍࣽ➤_.ppt *piedra : papel : tijera*_
 ┃✯│⿴⃟ٍࣽ➤_.tictactoe | ttt *sala*_
 ┃✯│⿴⃟ٍࣽ➤_.deltictactoe | delttt_
 ┃✯│⿴⃟ٍࣽ➤_.topgays_
 ┃✯│⿴⃟ٍࣽ➤_.topotakus_
 ┃✯│⿴⃟ٍࣽ➤_.toppajer@s_
 ┃✯│⿴⃟ٍࣽ➤_.topput@s_
 ┃✯│⿴⃟ٍࣽ➤_.topintegrantes | topintegrante_
 ┃✯│⿴⃟ٍࣽ➤_.toplagrasa | topgrasa_
 ┃✯│⿴⃟ٍࣽ➤_.toppanafrescos | toppanafresco_
 ┃✯│⿴⃟ٍࣽ➤_.topshiposters | topshipost_
 ┃✯│⿴⃟ٍࣽ➤_.toplindos | toplind@s_
 ┃✯│⿴⃟ٍࣽ➤_.topfamosos | topfamos@s_
 ┃✯│⿴⃟ٍࣽ➤_.topparejas | top5parejas_
 ┃✯│⿴⃟ٍࣽ➤_.gay | gay *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.gay2 *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.lesbiana *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.manca *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.manco *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.pajero *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.pajera *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.puto *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.puta *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.rata *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.love *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.doxear *nombre : @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.doxxeame_
 ┃✯│⿴⃟ٍࣽ➤_.pregunta *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.apostar | slot *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.formarpareja_
 ┃✯│⿴⃟ٍࣽ➤_.dado_
 ┃✯│⿴⃟ٍࣽ➤_.verdad_
 ┃✯│⿴⃟ٍࣽ➤_.reto_
 ┃✯│⿴⃟ٍࣽ➤_.multijuegos_
 ┃✯╰⿴⃟ٍࣽ➤_.juegos_
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-🤴𝐎𝐖𝐍𝐄𝐑👸-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.simi | okgoogle *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.alexa | siri | cortana *texto*_
 ┃✯╰⿴⃟ٍࣽ➤_.simsimi | bixby *texto*_
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 ┃✯-👥𝐆𝐑𝐔𝐏𝐎👩‍🏫-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *bienvenida | welcome*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *avisos | detect*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *autonivel | autolevelup*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *restringir | restrict*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antillamar | anticall*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *publico | public*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *autovisto | autoread*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *temporal*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *stickers*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *autosticker*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *reacciones | reaction*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *audios*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *modocaliente | modohorny*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antitoxicos | antitoxic*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antiver | antiviewonce*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antieliminar | antidelete*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antinternacional | antifake*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antienlace | antilink*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antienlace2 | antilink2*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antitiktok | antitk*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antiyoutube | antiyt*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antitelegram | antitel*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antifacebook | antifb*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antinstagram | antig*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *antitwitter | antitw*_
 ┃✯│⿴⃟ٍࣽ➤_.on *:* off *soloprivados | pconly*_
 ┃✯╰⿴⃟ٍࣽ➤_.on *:* off *sologrupos | gconly*_
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤*.configuracion*
 ┃✯│⿴⃟ٍࣽ➤*.settings*
 ┃✯╰⿴⃟ٍࣽ➤*.vergrupo*
 ╰━━━━━━━━━━━──⊷ 
 ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯✔️𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑❎ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭─────────────◆  
 ┃✯│⿴⃟ٍࣽ➤_.imagen | image *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.pinterest | dlpinterest *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.wallpaper|wp *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.play | play2 *texto o link*_
 ┃✯│⿴⃟ٍࣽ➤_.play.1 *texto o link*_
 ┃✯│⿴⃟ٍࣽ➤_.play.2 *texto o link*_ 
 ┃✯│⿴⃟ٍࣽ➤_.ytmp3 | yta *link*_
 ┃✯│⿴⃟ٍࣽ➤_.ytmp4 | ytv *link*_
 ┃✯│⿴⃟ٍࣽ➤_.pdocaudio | ytadoc *link*_
 ┃✯│⿴⃟ٍࣽ➤_.pdocvieo | ytvdoc *link*_
 ┃✯│⿴⃟ٍࣽ➤_.tw |twdl | twitter *link*_
 ┃✯│⿴⃟ٍࣽ➤_.facebook | fb *link*_
 ┃✯│⿴⃟ٍࣽ➤_.instagram *link video o imagen*_
 ┃✯│⿴⃟ٍࣽ➤_.verig | igstalk *usuario(a)*_
 ┃✯│⿴⃟ٍࣽ➤_.ighistoria | igstory *usuario(a)*_
 ┃✯│⿴⃟ٍࣽ➤_.tiktok *link*_
 ┃✯│⿴⃟ٍࣽ➤_.tiktokfoto | tiktokphoto *usuario(a)*_
 ┃✯│⿴⃟ٍࣽ➤_.vertiktok | tiktokstalk *usuario(a)*_
 ┃✯│⿴⃟ٍࣽ➤_.mediafire | dlmediafire *link*_
 ┃✯│⿴⃟ٍࣽ➤_.clonarepo | gitclone *link*_
 ┃✯│⿴⃟ٍࣽ➤_.clima *país ciudad*_
 ┃✯│⿴⃟ٍࣽ➤_.consejo_
 ┃✯│⿴⃟ٍࣽ➤_.morse codificar *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.morse decodificar *morse*_
 ┃✯│⿴⃟ٍࣽ➤_.fraseromantica_
 ┃✯╰⿴⃟ٍࣽ➤_.historia_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.chatanonimo | anonimochat_
 ┃✯│⿴⃟ٍࣽ➤_.anonimoch_
 ┃✯│⿴⃟ٍࣽ➤_.start_
 ┃✯│⿴⃟ٍࣽ➤_.next_
 ┃✯╰⿴⃟ٍࣽ➤_.leave_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.add *numero*_
 ┃✯│⿴⃟ٍࣽ➤_.sacar | ban | kick  *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.grupo *abrir : cerrar*_
 ┃✯│⿴⃟ٍࣽ➤_.group *open : close*_
 ┃✯│⿴⃟ٍࣽ➤_.daradmin | promote *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.quitar | demote *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.banchat_
 ┃✯│⿴⃟ٍࣽ➤_.unbanchat_
 ┃✯│⿴⃟ٍࣽ➤_.banuser *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.unbanuser *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.admins *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.invocar *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.tagall *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.hidetag *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.infogrupo | infogroup_
 ┃✯│⿴⃟ٍࣽ➤_.grupotiempo | grouptime *Cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.advertencia *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.deladvertencia *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.delwarn *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.crearvoto | startvoto *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.sivotar | upvote_
 ┃✯│⿴⃟ٍࣽ➤_.novotar | devote_
 ┃✯│⿴⃟ٍࣽ➤_.vervotos | cekvoto_
 ┃✯│⿴⃟ٍࣽ➤_.delvoto | deletevoto_
 ┃✯│⿴⃟ٍࣽ➤_.enlace | link_
 ┃✯│⿴⃟ٍࣽ➤_.newnombre | nuevonombre *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.newdesc | descripcion *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.setwelcome | bienvenida *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.setbye | despedida *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.nuevoenlace | resetlink_
 ┃✯│⿴⃟ٍࣽ➤_.on_
 ┃✯╰⿴⃟ٍࣽ➤_.off_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.listaparejas | listship_
 ┃✯│⿴⃟ٍࣽ➤_.mipareja | mylove_
 ┃✯│⿴⃟ٍࣽ➤_.pareja | couple *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.aceptar | accept *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.rechazar | decline *@tag*_
 ┃✯╰⿴⃟ٍࣽ➤_.terminar | finish *@tag*_
 ╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.crearvoto | startvoto *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.sivotar | upvote_
 ┃✯│⿴⃟ٍࣽ➤_.novotar | devote_
 ┃✯│⿴⃟ٍࣽ➤_.vervotos | cekvoto_
 ┃✯╰⿴⃟ٍࣽ➤_.delvoto | deletevoto_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯╰⿴⃟ٍࣽ➤ 🔞 _.hornymenu_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.toimg | img | jpg *sticker*_
 ┃✯│⿴⃟ٍࣽ➤_.tomp3 | mp3 *video o nota de voz*_
 ┃✯│⿴⃟ٍࣽ➤_.tovn | vn *video o audio*_
 ┃✯│⿴⃟ٍࣽ➤_.tovideo *audio*_
 ┃✯│⿴⃟ٍࣽ➤_.tourl *video, imagen*_
 ┃✯│⿴⃟ٍࣽ➤_.toenlace  *video, imagen o audio*_
 ┃✯╰⿴⃟ٍࣽ➤_.tts es *texto*_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
  ┃✯╰⿴⃟ٍࣽ➤_.logos *efecto texto*_
 ╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.simpcard *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.hornycard *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.lolice *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.ytcomment *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.itssostupid_
 ┃✯│⿴⃟ٍࣽ➤_.pixelar_
 ┃✯╰⿴⃟ٍࣽ➤_.blur_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.chica_
 ┃✯│⿴⃟ٍࣽ➤_.chico_
 ┃✯│⿴⃟ٍࣽ➤_.cristianoronaldo_
 ┃✯│⿴⃟ٍࣽ➤_.messi_
 ┃✯│⿴⃟ٍࣽ➤_.meme_
 ┃✯│⿴⃟ٍࣽ➤_.meme2_
 ┃✯│⿴⃟ٍࣽ➤_.itzy_
 ┃✯│⿴⃟ٍࣽ➤_.blackpink_
 ┃✯│⿴⃟ٍࣽ➤_.kpop *blackpink : exo : bts*_
 ┃✯│⿴⃟ٍࣽ➤_.lolivid_
 ┃✯│⿴⃟ٍࣽ➤_.loli_
 ┃✯│⿴⃟ٍࣽ➤_.navidad_
 ┃✯│⿴⃟ٍࣽ➤_.ppcouple_
 ┃✯│⿴⃟ٍࣽ➤_.neko_
 ┃✯│⿴⃟ٍࣽ➤_.waifu_
 ┃✯│⿴⃟ٍࣽ➤_.akira_
 ┃✯│⿴⃟ٍࣽ➤_.akiyama_
 ┃✯│⿴⃟ٍࣽ➤_.anna_
 ┃✯│⿴⃟ٍࣽ➤_.asuna_
 ┃✯│⿴⃟ٍࣽ➤_.ayuzawa_
 ┃✯│⿴⃟ٍࣽ➤_.boruto_
 ┃✯│⿴⃟ٍࣽ➤_.chiho_
 ┃✯│⿴⃟ٍࣽ➤_.chitoge_
 ┃✯│⿴⃟ٍࣽ➤_.deidara_
 ┃✯│⿴⃟ٍࣽ➤_.erza_
 ┃✯│⿴⃟ٍࣽ➤_.elaina_
 ┃✯│⿴⃟ٍࣽ➤_.eba_
 ┃✯│⿴⃟ٍࣽ➤_.emilia_
 ┃✯│⿴⃟ٍࣽ➤_.hestia_
 ┃✯│⿴⃟ٍࣽ➤_.hinata_
 ┃✯│⿴⃟ٍࣽ➤_.inori_
 ┃✯│⿴⃟ٍࣽ➤_.isuzu_
 ┃✯│⿴⃟ٍࣽ➤_.itachi_
 ┃✯│⿴⃟ٍࣽ➤_.itori_
 ┃✯│⿴⃟ٍࣽ➤_.kaga_
 ┃✯│⿴⃟ٍࣽ➤_.kagura_
 ┃✯│⿴⃟ٍࣽ➤_.kaori_
 ┃✯│⿴⃟ٍࣽ➤_.keneki_
 ┃✯│⿴⃟ٍࣽ➤_.kotori_
 ┃✯│⿴⃟ٍࣽ➤_.kurumi_
 ┃✯│⿴⃟ٍࣽ➤_.madara_
 ┃✯│⿴⃟ٍࣽ➤_.mikasa_
 ┃✯│⿴⃟ٍࣽ➤_.miku_
 ┃✯│⿴⃟ٍࣽ➤_.minato_
 ┃✯│⿴⃟ٍࣽ➤_.naruto_
 ┃✯│⿴⃟ٍࣽ➤_.nezuko_
 ┃✯│⿴⃟ٍࣽ➤_.sagiri_
 ┃✯│⿴⃟ٍࣽ➤_.sasuke_
 ┃✯│⿴⃟ٍࣽ➤_.sakura_
 ┃✯╰⿴⃟ٍࣽ➤_.cosplay_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆
 ┃✯│⿴⃟ٍࣽ➤_.bass_
 ┃✯│⿴⃟ٍࣽ➤_.blown_
 ┃✯│⿴⃟ٍࣽ➤_.deep_
 ┃✯│⿴⃟ٍࣽ➤_.earrape_
 ┃✯│⿴⃟ٍࣽ➤_.fast_
 ┃✯│⿴⃟ٍࣽ➤_.fat_
 ┃✯│⿴⃟ٍࣽ➤_.nightcore_
 ┃✯│⿴⃟ٍࣽ➤_.reverse_
 ┃✯│⿴⃟ٍࣽ➤_.robot_
 ┃✯│⿴⃟ٍࣽ➤_.slow_
 ┃✯│⿴⃟ٍࣽ➤_.smooth_
 ┃✯╰⿴⃟ٍࣽ➤_.tupai_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤ _.animeinfo *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.mangainfo *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.google *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.letra | lirik *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ytsearch | yts *texto*_
 ┃✯╰⿴⃟ٍࣽ➤_.wiki | wikipedia *texto*_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯╰⿴⃟ٍࣽ➤_.audios_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.afk *motivo*_
 ┃✯│⿴⃟ٍࣽ➤_.acortar *url*_
 ┃✯│⿴⃟ٍࣽ➤_.calc *operacion math*_
 ┃✯│⿴⃟ٍࣽ➤_.del *respondre a mensaje del Bot*_
 ┃✯│⿴⃟ٍࣽ➤_.qrcode *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.readmore *texto1|texto2*_
 ┃✯│⿴⃟ٍࣽ➤_.spamwa *numero|texto|cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.styletext *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.traducir *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.morse codificar *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.morse decodificar *morse*_
 ┃✯│⿴⃟ٍࣽ➤_.encuesta | poll *Motivo*_
 ┃✯╰⿴⃟ٍࣽ➤_.horario_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤ _.botemporal *enlace* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.addbot *enlace* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.pase premium_
 ┃✯│⿴⃟ٍࣽ➤_.pass premium_
 ┃✯│⿴⃟ٍࣽ➤_.listapremium | listprem_
 ┃✯│⿴⃟ٍࣽ➤_.transfer *tipo cantidad @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.dar *tipo cantidad @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.enviar *tipo cantidad @tag*_
 ┃✯│⿴⃟ٍࣽ➤_.balance_
 ┃✯│⿴⃟ٍࣽ➤_.cartera | wallet_
 ┃✯│⿴⃟ٍࣽ➤_.experiencia | exp_
 ┃✯│⿴⃟ٍࣽ➤_.top | lb | leaderboard_
 ┃✯│⿴⃟ٍࣽ➤_.nivel | level | lvl_
 ┃✯│⿴⃟ٍࣽ➤_.rol | rango_
 ┃✯│⿴⃟ٍࣽ➤_.inventario | inventory_
 ┃✯│⿴⃟ٍࣽ➤_.aventura | adventure_
 ┃✯│⿴⃟ٍࣽ➤_.caza | cazar | hunt_
 ┃✯│⿴⃟ٍࣽ➤_.pescar | fishing_
 ┃✯│⿴⃟ٍࣽ➤_.animales_
 ┃✯│⿴⃟ٍࣽ➤_.alimentos_
 ┃✯│⿴⃟ٍࣽ➤_.curar | heal_
 ┃✯│⿴⃟ٍࣽ➤_.buy_
 ┃✯│⿴⃟ٍࣽ➤_.sell_
 ┃✯│⿴⃟ٍࣽ➤_.verificar | registrar_
 ┃✯│⿴⃟ٍࣽ➤_.perfil | profile_
 ┃✯│⿴⃟ٍࣽ➤_.myns_
 ┃✯│⿴⃟ٍࣽ➤_.unreg *numero de serie*_
 ┃✯│⿴⃟ٍࣽ➤_.minardiamantes | minargemas_
 ┃✯│⿴⃟ٍࣽ➤_.minargatacoins | minarcoins_
 ┃✯│⿴⃟ٍࣽ➤_.minarexperiencia | minarexp_
 ┃✯│⿴⃟ٍࣽ➤_.minar *:* minar2 *:* minar3_
 ┃✯│⿴⃟ٍࣽ➤_.reclamar | regalo | claim_
 ┃✯│⿴⃟ٍࣽ➤_.cadahora | hourly_
 ┃✯│⿴⃟ٍࣽ➤_.cadasemana | semanal | weekly_
 ┃✯│⿴⃟ٍࣽ➤_.cadames | mes | monthly_
 ┃✯│⿴⃟ٍࣽ➤_.cofre | abrircofre | coffer_
 ┃✯╰⿴⃟ٍࣽ➤_.trabajar | work_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯╰⿴⃟ٍࣽ➤_.top | lb | leaderboard_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.sticker | s *imagen o video*_
 ┃✯│⿴⃟ٍࣽ➤_.sticker | s *url de tipo jpg*_
 ┃✯│⿴⃟ٍࣽ➤_.emojimix *😺+😆*_
 ┃✯│⿴⃟ٍࣽ➤_.scircle | círculo *imagen*_
 ┃✯│⿴⃟ٍࣽ➤_.semoji | emoji *tipo emoji*_
 ┃✯│⿴⃟ٍࣽ➤_.attp *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.attp2 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp2 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp3 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp4 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp5 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.ttp6 *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.dado_
 ┃✯│⿴⃟ٍࣽ➤_.stickermarker *efecto : responder a imagen*_
 ┃✯│⿴⃟ٍࣽ➤_.stickerfilter *efecto : responder a imagen*_
 ┃✯│⿴⃟ٍࣽ➤_.cs *:* cs2_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.wm *packname|author*_
 ┃✯╰⿴⃟ٍࣽ➤_.wm *texto1|texto2*_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.palmaditas | pat *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.bofetada | slap *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.golpear *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.besar | kiss *@tag*_
 ┃✯╰⿴⃟ٍࣽ➤_.alimentar | food *@tag*_
 ╰━━━━━━━━━━━──⊷ 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎ 
 ╭─────────────◆ 
 │✯-👩‍🔧𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒👩‍🏭-⦿ 
 ┃✯🍁᭢━━━━━━━━━᭥🍁᭢ 
 ┃✯╭──────────◆ 
 ┃✯│⿴⃟ٍࣽ➤_.join *enlace*_
 ┃✯│⿴⃟ٍࣽ➤_.unete *enlace*_
 ┃✯│⿴⃟ٍࣽ➤_.dardiamantes *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.darxp *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.dargatacoins *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.addprem | userpremium *@tag* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.addprem2 | userpremium2 *@tag* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.addprem3 | userpremium3 *@tag* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.addprem4 | userpremium4 *@tag* *cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.idioma | language_
 ┃✯│⿴⃟ٍࣽ➤_.cajafuerte_
 ┃✯│⿴⃟ٍࣽ➤_.comunicar | broadcastall | bc *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.broadcastchats | bcc *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.comunicarpv *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.broadcastgc *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.comunicargrupos *texto*_
 ┃✯│⿴⃟ٍࣽ➤_.borrartmp | cleartmp_
 ┃✯│⿴⃟ٍࣽ➤_.delexp *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.delgatacoins *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.deldiamantes *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.reiniciar | restart_
 ┃✯│⿴⃟ٍࣽ➤_.ctualizar | update_
 ┃✯│⿴⃟ٍࣽ➤_.addprem | +prem *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.delprem | -prem *@tag*_
 ┃✯│⿴⃟ٍࣽ➤_.listapremium | listprem_
 ┃✯│⿴⃟ٍࣽ➤_.añadirdiamantes *@tag cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.añadirxp *@tag cantidad*_
 ┃✯│⿴⃟ٍࣽ➤_.añadirgatacoins *@tag cantidad*_
 ╰━━━━━━━━━━━──⊷ 
 ᴏᴡɴᴇʀ:D.E.S.N_OFFICIAL17  
 ɴᴜᴍᴇʀᴏ:Wa.me/593990058725`.trim() 
 if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
