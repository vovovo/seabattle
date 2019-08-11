import svg from "svg.js";

class BattleField {

    setGame(game) {
        this.game = game;
    }

    constructor(game) {
        let size = 10;
        this.ceils = [];
        this.engagedCeils = [];
        this.game = game;
        this.sqrSizePx = 40;
        this.areas = [];
        this.buildGrid(size);
        this.drawCells();
    }

    buildGrid(size) {
        var grid = [];

        var coords = [];
        var counter = 0;
        for (var x = 0; x < size; x += 1) {
            grid[x] = [];
            for (var y = 0; y < size; y += 1) {
                grid[x][y] = counter;
                coords[counter] = {
                    x: x,
                    y: y,
                    xPos: parseInt(x) * this.sqrSizePx,
                    yPos: parseInt(y) * this.sqrSizePx,
                };
                counter++;
            }
        }

        this.grid = grid;
        this.coords = coords;
        this.counter = counter;
    }

    checkCeilForAvailable(shipType, target) {

        var offset = shipType.size;
        var success = true;
        if (typeof  this.game.dock.choisedShipType === 'undefined') {
            return false;
        }
        //Проверка выхода за границы
        if (shipType.isVertical) {
            if (typeof this.grid[parseInt(target.dataset.y) + offset - 1] === 'undefined') {
                success = false;
            }
        } else {
            if (typeof this.grid[parseInt(target.dataset.x) + offset - 1] === 'undefined') {
                success = false;
            }
        }
        //Проверка рядом


        return success;
    }

    markEngagedCeil(x,y){
        this.engagedCeils[x][y] = 1;
    }

    drawShip(shipType, target) {
        var offset = shipType.size;
        if (this.checkCeilForAvailable(shipType, target)) {
            var x = parseInt(target.dataset.x);
            var y = parseInt(target.dataset.y);
            for (var index = 0; index < offset; index++) {

                this.grid[x][y].fill('#000');
                shipType.isVertical ? y++ : x++;
                //this.markEngagedCeil(x,y)
            }
        }
    }

    cellHover(e) {
        this.drawShip(this.game.dock.choisedShipType, e.target)
    }

    /*    cellOut(e) {
            if(parseInt(e.target.dataset.x)+1 in this.grid){
                e.target.style.fill = "#999";
                this.grid[parseInt(e.target.dataset.x)+1][parseInt(e.target.dataset.y) ].fill('#999');
            }
        }*/

    drawCells() {
        var el;

        this.coords.forEach((item, index, arr) => {
            el = this.game.svgCanvas.rect(this.sqrSizePx - 1, this.sqrSizePx - 1).move(item.xPos, item.yPos).attr({fill: '#999'})
                .data({
                    'index': index,
                    'x': item.x,
                    'y': item.y
                })
                .on('click', this.cellHover, this)
            //.on('mouseout', this.cellOut, this);
            this.grid[item.x][item.y] = el;
            this.ceils.push(el);
            console.log(item);

        });
    }
}

export default BattleField;
