import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

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
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let Terminos = `
*_Toda la informaciÃ³n que se mencione aquÃ­ no excluye a la Propietaria del Bot, y Propietarios Acredores al uso de GataBot-MD_*
*_No Somos responsables del desconocimiento que tenga por parte de esta informaciÃ³n._* 


*TÃ‰RMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y tambiÃ©n Garantizamos que la informaciÃ³n como (imÃ¡genes, vÃ­deos, enlaces, ubicaciÃ³n, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a NÃºmero(s) Oficial(es) No son ni serÃ¡n Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._

_- Lo que realicÃ© con el BOT queda solo en Usted ya que en NÃºmero(s) Oficial(es) El Chat se Borra cada 24 Horas, segÃºn el tiempo de Mensajes Temporales de WhatsApp._

_- Es posible que en NÃºmero(s) Oficial(es) el Bot no estÃ© Activado las 24 Horas de los 7 dÃ­as de la Semana, eso no implica que no lo estÃ© o que Propietarios NO OFICIALES puedan Hacerlo._

_- El chat anÃ³nimo del comando #start, valga la redundancia no mostrarÃ¡ ningÃºn dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta funciÃ³n puedan dar a conocer sus datos. en NÃºmero(s) Oficial(es)._

_- Los Datos que Obtenga GataBot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en Ã“ptimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir CompensaciÃ³n Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas)._

_- NO somos responsable si Hay alteraciones de este Bot no siendo NÃºmero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._

_- La funciÃ³n Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales._


*TÃ‰RMINOS DE USO* 
_- La informaciÃ³n que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirÃ¡ saber los TÃ©rminos y Condiciones de tal forma que no habrÃ¡ incovenientes al hacer un uso Particular de las Funciones del Bot._

_- El Bot contiene Material que solo puede ser visible para mayores de 18 AÃ±os, NO somos responsable si no cumple con la edad mÃ­nima para usar el Material para Adultos._

_- Las imÃ¡genes, VÃ­deos y Audios que tenga este Bot son de uso PÃºblico, Pero se considerarÃ¡ Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o informaciÃ³n relevante._

_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminaciÃ³n u campaÃ±as sin fundamentos._

_- Si ha recibido un Comunicado Oficial siendo NÃºmero(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._

_- Las Cuentas Oficiales de KanakiBot no se hacen responsable del Uso que usted haga con la funciÃ³n "Sub Bot"._


*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo NÃºmero(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._

_- NO usar el Bot siendo NÃºmero(s) Oficial(es) para llevar a cabo alguna acciÃ³n hostil que pueda verse comprometida el Funcionamiento del BOT._

_- NO use el comando de SPAM repetidamente, ya que ProvocarÃ¡ un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._

_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarÃ¡n las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de KanakiBot._


*ESTE ES EL REPOSITORIO OFICIAL*
*https://github.com/Saldarriaga184/KanakiBot-MD*


*CUENTA OFICIAL DE ASISTENCIA - INSTAGRAM*
~ _Solo en esta Cuenta Respondo si tiene Dudas, Preguntas o Necesita Ayuda sobre KanakiBot-MD, TambiÃ©n puede Comunicarse en Caso de Temas de ColaboraciÃ³n_
//*https://www.instagram.com/gata_dios*


*DONAR A LA CREADOR EN ESTA CUENTA OFICIAL*
~ _Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar para que pueda continuar en este Proyecto_
//*https://paypal.me/OfiGD*


*~ Muchas Gracias Por tomarte el tiempo en informate sobre 𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩*` 
conn.sendButton(m.chat, Terminos, `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial\nhttps://www.instagram.com/gata_dios`, pp, [
['ð™ˆð™šð™£ð™ªÌ ð™˜ð™¤ð™¢ð™¥ð™¡ð™šð™©ð™¤ | ð™ð™ªð™¡ð™¡ ð™ˆð™šð™£ð™ª ðŸ’«', '.allmenu'],
['ð™ˆð™šð™£ð™ª ð™™ð™šð™¨ð™¥ð™¡ð™šð™œð™–ð™—ð™¡ð™š | ð™ˆð™šð™£ð™ª ð™‡ð™žð™¨ð™© ðŸŒŸ', '/menulista'],
['ð™ˆð™šð™£ð™ª ð™‹ð™§ð™žð™£ð™˜ð™žð™¥ð™–ð™¡ | ð™ˆð™–ð™žð™£ ð™¢ð™šð™£ð™ª âš', '#menu']
], m)
/*.trim()
conn.sendHydrated(m.chat, Terminos,  `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial | https://www.instagram.com/gata_dios`, pp, 'https://github.com/GataNina-Li/GataBot-MD', 'ð™‚ð™–ð™©ð™–ð˜½ð™¤ð™©-ð™ˆð˜¿', null, null, [
['ð™ˆð™šð™£ð™ªÌ ð™˜ð™¤ð™¢ð™¥ð™¡ð™šð™©ð™¤ | ð™ð™ªð™¡ð™¡ ð™ˆð™šð™£ð™ª ðŸ’«', '.allmenu'],
['ð™ˆð™šð™£ð™ª ð™™ð™šð™¨ð™¥ð™¡ð™šð™œð™–ð™—ð™¡ð™š | ð™ˆð™šð™£ð™ª ð™‡ð™žð™¨ð™© ðŸŒŸ', '/menulista'],
['ð™ˆð™šð™£ð™ª ð™‹ð™§ð™žð™£ð™˜ð™žð™¥ð™–ð™¡ | ð™ˆð™–ð™žð™£ ð™¢ð™šð™£ð™ª âš?', '#menu']
], m,)*/
}

handler.customPrefix = /terminos|tÃ©rminos|tÃ©rminos, condiciones y privacidad|terminos, condiciones y privacidad|tÃ©rminos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|TerminÃ³ se uso|tÃ©rminos de uso|TÃ©rminos de uso|TÃ©rminos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
