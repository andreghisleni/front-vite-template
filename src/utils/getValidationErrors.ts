import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  const ValidationErrors: Errors = {};

  err.inner.forEach(error => {
    ValidationErrors[(error as any).path] = (error as any).message;
  });

  return ValidationErrors;
}
