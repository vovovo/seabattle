
import battleField from './BattleField';
import player from './Player';
import ship from './Ship';
import dock from './Dock';

class Game {

    constructor(){
        this.canvas = this.svgCanvas= SVG('drawing').size(600, 400);
        this.init(
            new player(),
            new player(),
            new battleField(this),
            new dock(this),
        );
    }

    init(
        player1,
        player2,
        battleField,
        dock
    ){

        this.player1 = player1;
        this.player2 = player2;
        this.activePlayer = this.player1;
        this.battleField = battleField;
        this.dock = dock;
    }




}

export default Game;
