hiconst fs = require('fs-extra')
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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "94766911711,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_21_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvRFVWNTRTTkYrbElmWERXcjBIVGN6M1dGV0ZPRzVjZEVrQjZvb290UUZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1NDc4MDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QjMyQTgyNzNFNkM0NUJGRjRGQzdEMjZEQzc1NDBGQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM4NDk3MTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTQ3ODA5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzQ4RUU2OTAzQUI3NjJGMUUzOTk1MEZEMDBCNTk2NTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzEzODQ5NzEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzU0NzgwOTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBODE4NTIzOUNDN0FENTE1N0VBMjE2NEEwMTkzRDg1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzg0OTcxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1NDc4MDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRTM2N0IyOUMzNUI1REUxRjE2MTU2RUU5MEU2NEQwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM4NDk3MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzVVRjR5XzlUbldlZGpRMGtnVS1Fd1wiLFxuICBcInBob25lSWRcIjogXCJlMmIxNzE5My1hMWI5LTRjODctOTI0Ni1hN2EwNjBlYjA5YWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTc4LFxuICAgICAgMTI4LFxuICAgICAgMTU0LFxuICAgICAgMTYsXG4gICAgICAxNjIsXG4gICAgICAxNDAsXG4gICAgICAyNTUsXG4gICAgICA2OCxcbiAgICAgIDEzOCxcbiAgICAgIDE2MSxcbiAgICAgIDI0NSxcbiAgICAgIDIyOSxcbiAgICAgIDEzNixcbiAgICAgIDI0NSxcbiAgICAgIDE0OCxcbiAgICAgIDIzMyxcbiAgICAgIDI0MCxcbiAgICAgIDU3LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMTkzLFxuICAgICAgMjEwLFxuICAgICAgMTQzLFxuICAgICAgMTMxLFxuICAgICAgMTEyLFxuICAgICAgNjQsXG4gICAgICAyMyxcbiAgICAgIDEyMSxcbiAgICAgIDEyMSxcbiAgICAgIDIyOCxcbiAgICAgIDIwOCxcbiAgICAgIDIwMixcbiAgICAgIDE1MyxcbiAgICAgIDE3MSxcbiAgICAgIDkyLFxuICAgICAgMTcwLFxuICAgICAgMzIsXG4gICAgICA1MCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlHM0tUNDNCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTQ3ODA5OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjg3Mzc1NDMwNTc1ODI6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLjgJbhtLfigbHigb/htLPvvKTvvYHvvY7vvZXvvZDvvYHimZpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM1hwNDBIRU9tS25iRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImowcFVNN2tVenB1Z0NuS1lqQ1YwckZjOVVLemQ3U1dYTURIS0FGT2FhR3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2c2VmZHUnQ2azc5M3NmMTR3WTlSUm5lenRHRzlmaTRNZlFOWkZYSVFnM05oUTNVYlJvWTdwcThDRjcyUnRCaXdvenJ1TXoxM3A5WnhDSURIbGpNQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieWdSK1o1S2ZZQk1Ec0ZoTnRnZHdkcXdsRzhOOUE1SERBakZmTlU5UFB5Y01iSnhOZi80N3hwZ1QwYTFVMWRPYldMeTlodVpWRVRzeFJWYWFER0Z5amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzU0NzgwOTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzg0OTcwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwrclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTCtyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlJHZmZlczVIcGt6K09lZkpHYnRiOGJ1WXpyRnFlQTJNMzhpb3lMQXBSVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTA2OTYxMzI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTM4NDk3MTIyOTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "VIVU©" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Danupa",
  packname: process.env.PACK_NAME || "vivu",
  botname : process.env.BOT_NAME  || "vivu-md",
  ownername:process.env.OWNER_NAME|| "Danu.Xz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
