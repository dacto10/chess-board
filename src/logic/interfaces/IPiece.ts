import { COLOR } from "../types";
import IPosition from "./IPosition";

export default interface IPiece {
    color: COLOR;
    position: IPosition;
    move?: (position: IPosition) => void;
    canMove?: (position: IPosition) => boolean;
}