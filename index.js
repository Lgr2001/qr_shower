var QRCode = require('qrcode');

QRCode.toString('常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。', { type: 'terminal' }, function (err, data) {
    console.log(data);
});
