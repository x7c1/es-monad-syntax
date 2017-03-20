
import { Expr, Scoped } from './Expr';

export const For = functions => ({
  yield(f) {
    return this._map(f);
  },
  get _map() {
    const [expr, ...exprs] = functions.map(Expr.create);
    return new Scoped(expr).flatten(exprs);
  },
});
