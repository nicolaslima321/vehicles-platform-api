export const isAllFieldsStrings =
  (params) => params.some((param) => typeof param != 'string') === false;

export const isInteger = (param) => Number.isInteger(parseInt(param));
