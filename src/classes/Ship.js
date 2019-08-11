class Ship {

    constructor(decCoords) {
        this.decs = [];
        this.width = 0;
        this.height = 0;
        this.decsCount = 0;
        this.decsKilled = [];
        this.setParams(decCoords)
    }

    setParams(decCoords){
        this.decs = decCoords;
        this.decsCount = decCoords.length;
        this.height = decCoords.length;
        this.width = decCoords.length;
    }

    killDec(index){
        decsKilled[index] = index;
    }

}

export default  Ship
