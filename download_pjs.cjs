const fs = require('fs');
const https = require('https');

const targetUrl = 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2';
const file = fs.createWriteStream('public/assets/fonts/PlusJakartaSans-Regular.woff2');
https.get(targetUrl, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded PlusJakartaSans-Regular.woff2, size:', fs.statSync('public/assets/fonts/PlusJakartaSans-Regular.woff2').size);
  });
});
