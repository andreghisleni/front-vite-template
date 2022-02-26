export const trim = (text: string): string => {
  return text.replace(/^s+|s+$/g, '');
};

const validateCEP = (cep: string): boolean => {
  const format = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

  const trimCEP = trim(cep);

  if (trimCEP.length > 0) {
    if (format.test(trimCEP)) return true;
    return false;
  }
  return false;
};

export default validateCEP;
