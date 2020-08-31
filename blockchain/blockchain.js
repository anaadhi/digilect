const Block = require('./block');

class Blockchain{

    constructor(){
        this.blocks = []
        this.blocks.push(this.makeGenesisBlock())
    }

    addBlock(info){
        let block = this.makeBlock(info);
        this.blocks.push(block);
    }

    makeGenesisBlock(){
        let info = {"voterID":"","aadharID":"","candidate":""};
        let block = new Block(0,info,0);
        return block;
    }

    makeBlock(data){
        let prevHash = this.blocks.slice(-1).pop().hash;
        let block = new Block(this.blocks.length,data,prevHash);
        return block
    }
}

let blockchain = new Blockchain();
Object.freeze(blockchain);

module.exports = blockchain;
