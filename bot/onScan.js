
const Qrterminal = require("qrcode-terminal")
/**
 * 扫码登录
 * @param qrcode
 * @param status
 */
module.exports = function onScan(qrcode, status) {
    Qrterminal.generate(qrcode)
}
