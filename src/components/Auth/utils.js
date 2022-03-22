const validateOnSignIn = (values) => {
  const { email, password } = values;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let errors = {};
  if (!email?.trim()) {
    errors.email = "Email Required";
  } else if (!email.match(emailFormat)) {
    errors.email = "Invalid Email";
  }

  if (!password?.trim()) {
    errors.password = "Password Required";
  } else if (password.trim().length < 7) {
    errors.password = "password should be atleast 7 characters";
  }
  return errors;
};

const validateOnSignUp = (values) => {
  const { email, username, password, password2 } = values;
  let errors = {};
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!username?.trim()) {
    errors.username = "Username Required";
  } else if (username.trim().length < 7) {
    errors.username = "Username Should be atleast 7 characters";
  }

  if (!email?.trim()) {
    errors.email = "Email Required";
  } else if (!email.match(emailFormat)) {
    errors.email = "Invalid Email";
  }

  if (!password?.trim()) {
    errors.password = "Password Required";
  } else if (password.trim().length < 7) {
    errors.password = "password should be atleast 7 characters";
  }

  if (!password2?.trim()) {
    errors.password2 = "Confirm your password";
  } else if (password !== password2) {
    errors.password2 = "Passwords donot match ";
  }

  return errors;
};

export { validateOnSignIn, validateOnSignUp };
