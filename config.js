const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

IMG: process.env.IMG=`https://telegra.ph/file/3c64b5608dd82d33dabe8.jpg`,
CAPTION: process.env.CAPTION=`*KEVIN-Md 𝐒𝐄𝐒𝐒𝐈𝐎𝐍-𝐈𝐃*\n\n_🪄 ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ_`,
//----------------------------------------------------------------------------------------
// මෙතනය ඔයා mega එකෙ Account එකක් හදලා එකෙ Email පාස් දාන්න ඔනේ මෙක වැඩ කරන්නෙනැතුව ගියොත් අවුල එන්නෙ ඔකෙ.
EMAIL: process.env.EMAIL=`pathumamantha2008@gmail.com`,
PASS: process.env.PASS=`f4w.hmK*_bhWSKB`,
    
};
