export default function divideFunction(numerator, denominator) {
  try {
    const out = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return out;
  } catch (error) {
    throw Error('cannot divide by 0');
  }
}
