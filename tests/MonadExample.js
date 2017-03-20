class Option {
}

class Some extends Option {
  constructor(value) {
    super();
    this._value = value;
  }
  map(f) {
    return new Some(f(this._value));
  }
  flatMap(f) {
    return f(this._value);
  }
  forEach(f) {
    f(this._value);
  }
  match({ Some, None }) {
    Some(this._value);
  }
  toString(){
    return `Some(${value})`;
  }
}

class None extends Option {
  map(f) {
    return none;
  }
  flatMap(f) {
    return none;
  }
  forEach(f) {
    //nop
  }
  match({ Some, None }) {
    None();
  }
  toString(){
    return 'None';
  }
}

const nonEmpty = x => (x !== null) && (x !== undefined);

export const some = x => new Some(x);

export const none = new None();

export const option = x => nonEmpty(x) ? some(x) : none;
