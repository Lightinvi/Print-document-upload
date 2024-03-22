var s = ""
document.addEventListener('DOMContentLoaded', function(){
    let unknown = document.getElementById('unknown')
    s = unknown.getAttribute('date-o')+unknown.getAttribute('date-k')+unknown.getAttribute('date-w')+unknown.getAttribute('date-u')+unknown.getAttribute('date-n')
})
const key = CryptoJS.enc.Utf8.parse(s);
const iv = CryptoJS.enc.Utf8.parse(s);

//加
function encrypt(text) {
    const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}

//解
function decrypt(encryptedText) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return decrypted.toString(CryptoJS.enc.Utf8);
}