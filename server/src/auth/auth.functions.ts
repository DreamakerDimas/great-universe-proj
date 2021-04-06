import * as bcrypt from 'bcrypt';

export const hashPassword = async (pass: string): Promise<string> => {
  const salt = parseInt(process.env.BCRYPT_SALT_ROUNDS);

  return await bcrypt.hash(pass, salt);
};

export const comparePasswords = async (
  pass: string,
  hashPass: string,
): Promise<boolean> => {
  return bcrypt.compare(pass, hashPass);
};
