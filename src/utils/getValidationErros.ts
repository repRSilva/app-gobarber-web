import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationError(errors: ValidationError): Errors {
  const validationErrors: Errors = {};

  errors.inner.forEach(err => {
    validationErrors[err.path || 'error'] = err.message;
  });

  return validationErrors;
}
