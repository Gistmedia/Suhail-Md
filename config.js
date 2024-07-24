const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ GIST_MD" 


global.devs = "2348167893138" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167893138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_04_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVpZcmlMRU5yVTUxY0JXeHpUdWFVQm9vc1h1RWlFTFlzeHAxVmJxdm4rbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY3ODkzMTM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOEFBODEyQjlFNDNDQUEzMzg2QUI1MUE3Q0QwQ0YxRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MDEwODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY3ODkzMTM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMDEzN0U3N0JDM0QwQjdBQ0EwMzc0QjkwNzY3OEZFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MDEwODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXBTbDR2U2pTaUdqV2l3c3V0cGJMZ1wiLFxuICBcInBob25lSWRcIjogXCIxZGM5YjdhNC1kNzJmLTQzNGMtYjUwNy00YzI4MDA2NTczMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDUsXG4gICAgICA2NyxcbiAgICAgIDE0NSxcbiAgICAgIDExOSxcbiAgICAgIDE5NSxcbiAgICAgIDQ1LFxuICAgICAgMTc3LFxuICAgICAgMzksXG4gICAgICAxLFxuICAgICAgMjUwLFxuICAgICAgMjE3LFxuICAgICAgMjUsXG4gICAgICAyNDcsXG4gICAgICAyNSxcbiAgICAgIDEyMixcbiAgICAgIDc5LFxuICAgICAgMTIsXG4gICAgICAxMTksXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgNTAsXG4gICAgICA0MyxcbiAgICAgIDE0MixcbiAgICAgIDEzNSxcbiAgICAgIDIyNixcbiAgICAgIDE2MCxcbiAgICAgIDk0LFxuICAgICAgMTQwLFxuICAgICAgMjAwLFxuICAgICAgMjE4LFxuICAgICAgMTI0LFxuICAgICAgMjYsXG4gICAgICAyMDMsXG4gICAgICA2NyxcbiAgICAgIDI1LFxuICAgICAgODksXG4gICAgICAxMjksXG4gICAgICAzMyxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WUxDMjVXTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2Nzg5MzEzODo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0Nzc2NzgzNjU1MDI4OjU2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdJU1RNRURJQSDinIzvuI/wn5WK77iPIPCfkq9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYlE5Sm9CRVBTeWdyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVDZWlKOXNLNEFOMDByQjdHNSsrK3l0NU5mK2ltVlVDZlJRaWxRME1XRG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGgrM2k1R3BpYy9WY0FlYTJGc05yVG1sVTVxRmVUVGZFN1J0ZDB6OHZQYU1CNmlOa3BmV1FNZDM4VVFVOHZrZ0VsMlpsdVFrZHZHTWcybFJOTDhaQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXF5aWZwUnZubHVnaFpCaGtLRGNnTVpvbWY3eis5TnVWVUN2cnVJd1Baa1YySEtTOHk3cERhRWxBZHlBSE1nV3ZyMnpWcEJvL1lERk5IQWhRdlZSanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Nzg5MzEzODo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MDEwNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZGlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtkaS5qc29uIjogIntcImtleURhdGFcIjpcIkZLaisxMGE2WjhpOTZzV092TFhGZXA3MjMxK2lTMjdmUjdwa0JxelIrUmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI0ODcyMjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MDEwODE2MTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GIST-MD",
  ownername:process.env.OWNER_NAME|| "GISTMEDIA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
