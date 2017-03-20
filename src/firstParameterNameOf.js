
const forArrowFunction = f => {
  const matches = f.toString().match(/\(?([^,^)]+)(,.+)?\)?\s+=>/);
  return matches && matches[1];
};

const forNormalFunction = f => {
  // const matches = f.toString().match(/function\s+\(([^,^)]+)/);
};

export default function firstParameterNameOf(f){
  return forArrowFunction(f);
};
