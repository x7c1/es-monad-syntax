import firstParameterNameOf from './firstParameterNameOf';

export class Expr {
  static create(f) {
    return new Expr(f);
  }
  constructor(f) {
    this._function = f;
  }
  monadFor(scope) {
    const dummy = {};
    return this._function(dummy, scope);
  }
  get name() {
    return firstParameterNameOf(this._function);
  }
}

export class Scoped {
  constructor(expr, scope = {}) {
    this._expr = expr;
    this._scope = scope;
  }
  flatten([expr, ...exprs]) {
    const from = expr => scope => new Scoped(expr, scope);
    return f => expr ?
      this._assigned.map(from(expr)).flatMap(scoped => scoped.flatten(exprs)(f)):
      this._assigned.map(f);
  }
  get _assigned() {
    const monad = this._expr.monadFor(this._scope);
    const toScope = value => Object.assign(this._scope, { [this._expr.name]: value });
    return monad.map(toScope);
  }
}
