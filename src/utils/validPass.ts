const validPass = (password: string) => {
  if (password.length === 0) return true;
  return password.length > 2;
};

export default validPass;
