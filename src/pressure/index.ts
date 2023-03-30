import * as dimension from './dimension';
import {Quantity, Unit} from '../unit';
import {kilograms} from '../mass';
import {meters} from '../length';
import {seconds} from '../time';

/** A quantity of pressure. */
export type Pressure<NumberType = number> = Quantity<
  NumberType,
  dimension.Pressure
>;

/** The pascal, symbol `Pa`, is the SI unit for force. */
export const pascals: Unit<number, dimension.Pressure> = kilograms
  .per(meters)
  .per(seconds.squared())
  .withSymbol('Pa');
