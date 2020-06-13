import {subsequences} from 'extra-array';

/**
 * Lists all possible subsets.
 * @param x a set
 * @param n number of values (-1 => any)
 */
function* subsets<T>(x: Iterable<T>, n: number=-1): IterableIterator<Set<T>> {
  for(var vs of subsequences([...x], n))
    yield new Set(vs);
}
export default subsets;
