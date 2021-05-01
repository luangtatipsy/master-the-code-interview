// Create a function that reverses a string
// "Hi My name is luangtatipsy" should be:
// "yspitatgnaul si eman yM iH"

function reverses(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Something went wrong, the input cannot be reversed";
  }

  let reversed_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed_str += str[i];
  }
  return reversed_str;
}
