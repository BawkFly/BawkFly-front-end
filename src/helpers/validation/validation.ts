export function emailIsValid(email: string): boolean {
  const regex = /^[^@\s]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/;

  return regex.test(email?.toLowerCase());
}

export function passwordIsMinimumValid(password: string): boolean {
  return password?.length >= 8;
}

const Validation = { emailIsValid, passwordIsMinimumValid };
export default Validation;
