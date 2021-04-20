import IPiece from "../../interfaces/IPiece";
import IPosition from "../../interfaces/IPosition";
import { COLOR } from "../../types";

export default class Piece implements IPiece {
    color: COLOR;
    position: IPosition;
    constructor(color: COLOR, position: IPosition) {
        this.color = color;
        this.position = position;
    }
}