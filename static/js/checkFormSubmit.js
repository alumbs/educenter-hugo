function checkSubmit() {
  var test = +document.getElementById("math-test").value;
  if (test !== 11) {
    return false;
  }
  return true;
}
