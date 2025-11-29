function firstChar(text) {
  const trimmed = text.trim();
  return trimmed.charAt(0);
	
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
