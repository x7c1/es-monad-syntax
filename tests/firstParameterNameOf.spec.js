import firstParameterNameOf from '../src/firstParameterNameOf';

const arrow = {
  withParenthesis: (x1) => {
    console.log('nop');
  },
  withParenthesis2: (y1, y2) => {
    console.log('nop');
  },
  noParenthesis: z1 => {
    console.log('nop');
  },
};

describe('firstParameterNameOf()', () => {

  describe('arrow function', () => {

    it('can return the name of a parameter in parenthesis', () => {
      expect(firstParameterNameOf(arrow.withParenthesis)).to.equal('x1');
    });

    it('can return the first name of two parameters in parenthesis', () => {
      expect(firstParameterNameOf(arrow.withParenthesis2)).to.equal('y1');
    });

    it("can return the name of a parameter not surrounded in parenthesis", () => {
      expect(firstParameterNameOf(arrow.noParenthesis)).to.equal('z1');
    });
  });

});
