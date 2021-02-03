import {from$} from "extra-array";
import type {arrayMapFn} from "./_types";

/**
 * Creates a set from values.
 * @param vs values
 * @param fm map function (v, i, x)
 */
function from<T, U=T>(vs: Iterable<T>, fm: arrayMapFn<T, T|U>=null): Set<T|U> {
  return new Set(fm? from$(vs).map(fm) : vs);
};
export default from;
