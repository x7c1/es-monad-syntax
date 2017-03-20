import { For } from '../src/ForYield'
import { some, none } from './MonadExample'

describe('ForYield', () => {

  it ('can handle monad without nesting', () => {
    const target = For([
      x1 => some(100),
      x2 => some(200),
      x3 => some(300),
    ]).yield(_ =>
      _.x1 + _.x2 + _.x3
    );
    target.match({
      Some: value => expect(value).to.equal(600),
      None: () => { throw Error('unexpected none') },
    });
  });

  it ('can provide variable scope through second parameter', () => {
    const target = For([
      x1 => some(100),
      (x2) => some(200),
      (x3, _) => some(_.x1 + 300),
    ]).yield(_ =>
      _.x1 + _.x2 + _.x3
    );
    target.match({
      Some: value => expect(value).to.equal(700),
      None: () => { throw Error('unexpected none') },
    });
  });

  it ('can handle monad like Option : none example', () => {
    const target = For([
      x1 => some(100),
      x2 => none,
      x3 => some(300),
    ]).yield(_ =>
      _.x1 + _.x2 + _.x3
    );
    expect(target).to.equal(none);
  });

});
