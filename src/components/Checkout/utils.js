const validateOnCheckout = (values) => {
  const {
    email = "",
    firstname = "",
    lastname = "",
    address = "",
    city = "",
    state = "",
    zipcode,
    phonenumber,
  } = values;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let errors = {};
  if (!email.trim()) {
    errors.email = "Email Required";
  } else if (!email.match(emailFormat)) {
    errors.email = "Invalid Email";
  }
  if (!firstname.trim()) {
    errors.firstname = "First Name Required";
  }
  if (!lastname.trim()) {
    errors.lastname = "Last Name required";
  }

  if (!address.trim()) {
    errors.address = "Address required";
  }

  if (!city) {
    errors.city = "Select a valid city from city popup";
  }

  if (!state.trim()) {
    errors.state = "State Required";
  }

  //should i add trim here since the zipcode is type number input we cannot add whitespace anyways so whats the point?
  if (!zipcode) {
    errors.zipcode = "Zip Code required";
  } else if (zipcode.length !== 5) {
    errors.zipcode = "Zip Code should be 5 digit code";
  }
  if (!phonenumber) {
    errors.phonenumber = "Phone Number required";
  }

  return errors;
};

export { validateOnCheckout };
