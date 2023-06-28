export default function guardrail(mathFunction) {
  const queu = [];
  const message = 'Guardrail was processed';
  try {
    const output = mathFunction();
    queu.push(output);
    queu.push(message);
  } catch (err) {
    queu.push(`Error: ${err.message}`);
    queu.push(message);
  }
  return queu;
}
