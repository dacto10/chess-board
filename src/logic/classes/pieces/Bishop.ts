import IPosition from "../../interfaces/IPosition";
import { COLOR } from "../../types";
import Piece from "./Piece";

export default class Bishop extends Piece {

    constructor(color: COLOR, position: IPosition) {
        super(color, position);
    }

    move(position: IPosition): void {

    }

    canMove(position: IPosition):boolean {
        return false;
    }
}