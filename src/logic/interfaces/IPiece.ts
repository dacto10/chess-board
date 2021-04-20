import { COLOR, PIECES } from "../types";
import IPosition from "./IPosition";

export default interface IPiece {
    color: COLOR;
    type: PIECES;
    position: IPosition;
    move: (position: IPosition) => void;
}