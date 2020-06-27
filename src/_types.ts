export type arrayMapFn<T, U> = (v: T, i: number, x: Iterable<T>) => U;
export type tillFn           = (dones: boolean[]) => boolean;
export type combineFn<T>     = (a: T, b: T) => T;
export type compareFn<T>     = (a: T, b: T) => number;
export type calledFn<T>      = (v: T, k: T, x: Iterable<T>) => void;
export type testFn<T>        = (v: T, k: T, x: Iterable<T>) => boolean;
export type mapFn<T, U>      = (v: T, k: T, x: Iterable<T>) => T|U;
export type reduceFn<T, U>   = (acc: U, v: T, k: T, x: Iterable<T>) => U;
export type getFn<T>         = () => T;
