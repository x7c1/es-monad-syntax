
const forArrowFunction = f => {
  const matches = f.toString().match(/\(?([^,^)]+)(,.+)?\)?\s+=>/);
  return matches && matches[1];
};

const forNormalFunction = f => {
  const matches = f.toString().match(/^\s*function\s*[^(]*\(([^,^)]+)(,.+)?\)/);
  return matches && matches[1];
};

export default function firstParameterNameOf(f){
  const match = forArrowFunction(f) || forNormalFunction(f);
  if (match === null || match === undefined) {
    throw new Error(`invalid parameter format: ${f}`)
  }
  return match;
};
