export const checkValidateData = (name, email, password) => {
  if (name) {
    const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
