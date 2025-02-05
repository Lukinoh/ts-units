import * as dimension from './dimension';
import {Quantity, Unit} from '../../unit';
import {amperes} from '../current';
import {seconds} from '../../time';

/** A quantity of electric charge. */
export type Charge = Quantity<dimension.Charge>;

/** The coulomb, symbol `C`, is the SI unit for electric charge. */
export const coulombs: Unit<dimension.Charge> = amperes
  .times(seconds)
  .withSymbol('C');
