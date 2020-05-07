/**
 * Picks an arbitrary value.
 * @param x a set
 * @param r random seed 0->1
 */
function value<T>(x: Set<T>, r: number=Math.random()): T {
  var i = Math.floor(r * x.size), j = -1;
  for(var v of x)
    if(++j===i) return v;
}
export default value;
