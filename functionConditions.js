function conditions(number) {
  if (number == 0) {
    return "Have a sandwich today";
  }
  else if (number == 1) {
    return "Have a slice of pizza today";
  }
  else if (number == 2) {
    return "Have a bowl of chili today";
  }
  else {
    return "Have a pack of gum today";
  }
}

console.log(conditions(0));
console.log(conditions(1));
console.log(conditions(2));
console.log(conditions(100));