const crypto = require('crypto');

module.exports = class Block{

    constructor(index,info,prevHash) {
        this.index = index;
        this.voterID = info.voterID;
        this.aadharID = info.aadharID;
        this.candidate = info.candidate;
        this.hash = this.getHash(index,info,prevHash);
        this.prevHash = prevHash;
        
    }

    getHash(index,info,prevHash){
        let data = `${index}&${info.voterID}&${info.aadharID}&${info.candidate}&${prevHash}`
        return calculateHash(data)
    }
}

function calculateHash(data){
    data = JSON.stringify(data).slice(1,-1)
    let hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash
}
