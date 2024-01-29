// check the valid bangladeshi number
export function validateBangladeshiPhoneNumber(phoneNumber) {
  const regex = /^01[0-9]{9}$/;
  return regex.test(phoneNumber);
}
// email validator
export function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email matches the regular expression
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}
