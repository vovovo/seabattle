class  Dock {

    constructor(
        size,
        count
    ){

        this.size = size;
        this.count = count;
        this.isVertical = true;
    }

    drawShips(){

    }

    drawDock(){

    }

    toggleOrientation(){
        this.isVertical = !this.isVertical;
    }

    onClick(){
        this.choisedShip = this;
        console.log(this.choisedShip);
    }

}

export default  Dock;
