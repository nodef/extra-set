import iterablePartitionOn from '@extra-iterable/partition-on';
import type {mapFn} from './_types';

/**
 * Segregates set keeping similar values together.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 * @returns Map {key => values}
 */
function partitionOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Map<T|U, T[]> {
  return iterablePartitionOn(x, v => fn.call(ths, v, v, x), ths);
}
export default partitionOn;
