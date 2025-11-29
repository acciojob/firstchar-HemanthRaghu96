function firstChar(text) {
  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return '';
  }
  return trimmed[0];
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
