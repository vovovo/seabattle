import dockShip from './DockShip';

class  Dock {

    constructor(game){

        this.ships = [];
        this.choisedShipType = null;
        this.shipTypes  = [
            new dockShip(1,4),
            new dockShip(2,3),
            new dockShip(3,2),
            new dockShip(4,1),
        ];

        this.game = game;
        this.drawDock();
    }

    choiseShipType(e){
        this.choisedShipType = this.shipTypes[e.target.dataset.index];
    }

    drawShips(){
        this.shipTypes.forEach((item, index, arr)=> {
            this.game.svgCanvas.rect((40*item.size),40).move(420,index*(40+2)).attr({ fill: '#333'})
                .data('index',index)
                .on('click', this.choiseShipType, this);
        });
    }

    drawDock(){
        this.game.svgCanvas.rect(180,400).move(420,0).attr({ fill: '#669999'});
        this.drawShips();
    }

}


export default  Dock;
