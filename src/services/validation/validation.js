export const isUniqueUserName = (userName, users) =>
  !users.find((user) => user.userName === userName);

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
};

export const isValidPass = (pass) => {
  const re = /(?=.*\d)(?=.*[A-z]).{8,}/;
  return re.test(String(pass));
};

export const isValidType = (type) => type === "Admin" || type === "Driver";
