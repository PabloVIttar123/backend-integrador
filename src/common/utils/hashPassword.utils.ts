const crypto = require('crypto');
//import * as bcrypt from 'bcrypt'
export const hashPassword = (str) => {
  return crypto.createHash('sha256').update(str).digest('hex');
};
