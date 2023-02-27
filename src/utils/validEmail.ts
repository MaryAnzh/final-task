const validEmail = (email: string) => {
  if (email.length === 0) return true;
  const EMAIL_REGEX = /^\w+([.-]?\w+)@\w+([.-]?\w+).$/;
  return EMAIL_REGEX.test(email);
};

export default validEmail;
