export default function signUpUser(firstname, lastname) {
  return new Promise((resolve) => {
    resolve({ firstname, lastname });
  });
}
