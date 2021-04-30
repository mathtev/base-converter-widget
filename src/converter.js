const validators = [
  /^[0-1\b]*$/,
  /^[0-2\b]*$/,
  /^[0-3\b]*$/,
  /^[0-4\b]*$/,
  /^[0-5\b]*$/,
  /^[0-6\b]*$/,
  /^[0-7\b]*$/,
  /^[0-8\b]*$/,
  /^[0-9\b]*$/,
  /^[0-9aA\b]*$/,
  /^[0-9a-bA-B\b]*$/,
  /^[0-9a-cA-C\b]*$/,
  /^[0-9a-dA-D\b]*$/,
  /^[0-9a-eA-E\b]*$/,
  /^[0-9a-fA-F\b]*$/,
];

function parseNumber(bigint, base) {
  let values = [];
  for (i = 0; i < bigint.length; i++) {
    values[i] = parseInt(bigint.charAt(i), base);
  }
  return values;
}

function formatNumber(values, base) {
  let bigint = '';
  for (i = 0; i < values.length; i++) {
    bigint += values[i].toString(base);
  }
  return bigint;
}

function convertNumber(numString, baseFrom, baseTo) {
  if (!validators[baseFrom - 2].test(numString)) {
    return false;
  }
  let inputValues = parseNumber(numString, baseFrom),
    outputValues = [],
    remainder,
    len = inputValues.length,
    pos = 0,
    i;
  while (pos < len) { 
    remainder = 0; 
    for (i = pos; i < len; i++) {
      remainder = inputValues[i] + remainder * baseFrom;
      inputValues[i] = Math.floor(remainder / baseTo);
      remainder -= inputValues[i] * baseTo;
      if (inputValues[i] == 0 && i == pos) {
        pos++;
      }
    }
    outputValues.push(remainder);
  }
  outputValues.reverse();
  return formatNumber(outputValues, baseTo);
}