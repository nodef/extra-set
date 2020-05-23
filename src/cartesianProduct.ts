import iterableCartesianProduct from '@extra-iterable/cartesian-product';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 */
function* cartesianProduct<T, U=T>(xs: Iterable<T>[], fn: mapFn<T[], T[]|U>=null): IterableIterator<T[]|U> {
}
