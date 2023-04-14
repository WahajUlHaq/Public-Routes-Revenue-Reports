const validators = {};

validators.registerationValidator = (data) => {
  if (!data.email) {
    return "Email is required";
  }
  if (!data.password) {
    return "Password is required";
  }
  if (!data.name) {
    return "Name is required";
  }
};

module.exports = validators;
