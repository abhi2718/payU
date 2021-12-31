const jsSHA = require("jssha");
exports.generateSHA512=hashString =>{
    const sha = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
          sha.update(hashString);
    return sha.getHash("HEX");
}